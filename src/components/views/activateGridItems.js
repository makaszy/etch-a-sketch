import getRandomHex from "../utils/genRandomHex"
import isValidHex from "../utils/isValidHex";

//Add hover functionality to the grid and color.
function activateGrid(color) {
  if (!isValidHex(color) || color !== "party") {
    throw new Error("Invalid Input: Input has to be a valid hex, or the string 'party'")
  }
  const gridItems = document.querySelectorAll(".etch-grid__grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", () => {
      (color === "party") ? gridItem.setAttribute(`style`, `background-color: ${getRandomHex()}`) : gridItem.setAttribute(`style`, `background-color: ${color}`);
    })
  })
}