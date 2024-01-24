document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const addPlayerButton = document.getElementById('addPlayerButton');
    const playerList = document.getElementById('playerList');
    const mainMenu = document.getElementById('mainMenu');
    const canvasContainer = document.getElementById('canvasContainer');

    addPlayerButton.addEventListener('click', function() {
        const playerName = prompt("Enter player's name:");
        if (playerName) {
            const playerItem = document.createElement('div');
            playerItem.textContent = playerName + " ";
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', function() {
                playerList.removeChild(playerItem);
            });

            playerItem.appendChild(removeButton);
            playerList.appendChild(playerItem);
        }
    });

    startButton.addEventListener('click', function() {
        const playerItems = playerList.getElementsByTagName('div');
        if (playerItems.length >= 2) {
            mainMenu.style.display = 'none';
            canvasContainer.style.display = 'block';
            if (window.initializeCanvas) {
                window.initializeCanvas();
            }
        } else {
            alert('Please add at least two players to start the game.');
        }
    });
});
