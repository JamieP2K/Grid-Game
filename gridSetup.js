// Get the canvas element and its context
function initializeCanvas() {
    let canvas = document.getElementById('gridCanvas');
    let ctx = canvas.getContext('2d');
    
    // Set the size of each grid cell
    let cellSize = 40;
    
    // Calculate the number of rows and columns
    let numRows = canvas.height / cellSize;
    let numCols = canvas.width / cellSize;
    
    // Create a mapping between numbers and colors
    let colorMap = {
        0: '#ffffff', // Floor
        1: '#000000', // Walls
        // Add more mappings as needed
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

// Expose the initializeCanvas function to be callable globally
window.initializeCanvas = initializeCanvas;