// Get the canvas element and its context
function initializeCanvas() {
  let canvas = document.getElementById("gridCanvas");
  console.log("Canvas element:", canvas); // Should show the canvas element
  let ctx = canvas.getContext("2d");
  console.log("Canvas context:", ctx); // Should show the canvas context

  // Set the size of each grid cell
  let cellSize = 40;

  // Calculate the number of rows and columns
  let numRows = canvas.height / cellSize;
  let numCols = canvas.width / cellSize;

  // Create a mapping between numbers and colors
  let colorMap = {
    0: "#ffffff", // Floor
    1: "#000000", // Walls

    2: "#FF0000", // Player 1
    3: "#00ff00", // Player 2
    4: "#0000ff", // Player 3
    //TODO Add more mappings as needed
  };

  // Create a 2D array of numbers for a 10 by 30 grid
  let numberGrid = [
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ];

  function populateGrid() {
    // Draw the grid with colors based on numbers
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        // Calculate the position of the current cell
        let x = j * cellSize;
        let y = i * cellSize;

        // Get the number for the current cell
        let number = numberGrid[i][j];

        // Get the color based on the number from the mapping
        let color = colorMap[number];

        // Set the fill color
        ctx.fillStyle = color;

        // Draw the filled rectangle
        ctx.fillRect(x, y, cellSize, cellSize);

        // Draw the border
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }
  }

  //! use later to listen for clicks when players are selected
  canvas.addEventListener("click", handleCanvasClick);

  // Function to handle canvas click events
  function handleCanvasClick(event) {
    // Calculate the grid cell that was clicked
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    const clickedCellX = Math.floor(mouseX / cellSize);
    const clickedCellY = Math.floor(mouseY / cellSize);

    // Toggle the color of the clicked cell
    if (numberGrid[clickedCellY][clickedCellX] === 0) {
      numberGrid[clickedCellY][clickedCellX] = 1; // Change to a wall color, for example
    } else {
      numberGrid[clickedCellY][clickedCellX] = 0; // Change back to the floor color
    }

    // Redraw the grid with the updated colors
    populateGrid();
  }
  populateGrid();
}

// Expose the initializeCanvas function to be callable globally
window.initializeCanvas = initializeCanvas;
