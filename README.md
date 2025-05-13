# Spot the Difference Game

## Description
A configurable “Spot the Difference” game built with HTML, CSS, and JavaScript. Easily swap images and difference areas by editing a JSON file.

## How to Run
1. Upload your images into the `images/` folder.
2. Update `config.json` with:
   - New image paths.
   - Difference coordinates (`x`, `y`, `width`, `height`).
3. Open `index.html` in a browser.

## JSON Configuration
The `config.json` defines:
- Game title
- Image paths
- An array of differences with bounding boxes

Example:
```json
{
  "gameTitle": "Spot the Difference - Animals",
  "images": {
    "image1": "images/image-1.jpg",
    "image2": "images/image-2.jpg"
  },
  "differences": [
    { "x": 100, "y": 200, "width": 50, "height": 50 }
  ]
}
