import getRandomHex from "../utils/genRandomHex"

//Add hover functionality to the grid and color.
function activateGrid(color) {
  const gridItems = document.querySelectorAll(".etch-grid__grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      (color === "party") ? gridItem.setAttribute(`style`, `background-color: ${getRandomHex()}`) : gridItem.setAttribute(`style`, `background-color: ${color}`);
    })
  })
}