// Get game data from JSON
fetch('game-config.json')
  .then(response => response.json())
  .then(data => {
    const gameData = data;

    document.getElementById('gameTitle').textContent = gameData.gameTitle;
    document.getElementById('image1').src = gameData.images.image1;
    document.getElementById('image2').src = gameData.images.image2;

    const differences = gameData.differences;
    let score = 0;

    // Set up the score and timer
    let timer = 30;
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('time');
    const successMessage = document.getElementById('success-message');

    const timerInterval = setInterval(() => {
      if (timer <= 0) {
        clearInterval(timerInterval);
      } else {
        timer--;
        timerElement.textContent = `${timer}s`;
      }
    }, 1000);

    // Event listener for clicking on differences
    const image2Container = document.getElementById('image2-container');
    image2Container.addEventListener('click', (e) => {
      differences.forEach((difference, index) => {
        const { x, y, width, height } = difference;

        const clickX = e.offsetX;
        const clickY = e.offsetY;

        // Check if the click is within the difference area
        if (clickX > x && clickX < x + width && clickY > y && clickY < y + height) {
          // Highlight the difference
          const highlight = document.createElement('div');
          highlight.style.position = 'absolute';
          highlight.style.left = `${x}px`;
          highlight.style.top = `${y}px`;
          highlight.style.width = `${width}px`;
          highlight.style.height = `${height}px`;
          highlight.style.border = '3px solid red';
          highlight.style.pointerEvents = 'none';
          image2Container.appendChild(highlight);

          // Increment score
          score++;
          scoreElement.textContent = score;

          // Check if all differences are found
          if (score === differences.length) {
            successMessage.classList.remove('hidden');
          }
        }
      });
    });
  })
  .catch(error => console.error('Error loading game configuration:', error));
