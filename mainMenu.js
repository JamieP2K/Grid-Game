document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const addPlayerButton = document.getElementById("addPlayerButton");
  const playerList = document.getElementById("playerList");

  addPlayerButton.addEventListener("click", function () {
    const playerName = prompt("Enter player's name:");
    if (playerName) {
      const playerItem = document.createElement("div");
      playerItem.textContent = playerName + " ";

      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.addEventListener("click", function () {
        playerList.removeChild(playerItem);
      });

      playerItem.appendChild(removeButton);
      playerList.appendChild(playerItem);
    }
  });

  startButton.addEventListener("click", function () {
    const playerItems = playerList.getElementsByTagName("div");
    if (playerItems.length >= 2) {
      window.location.href = "gridSetup.html"; // Redirects to gridSetup.html
    } else {
      alert("Please add at least two players to start the game.");
    }
  });
});
