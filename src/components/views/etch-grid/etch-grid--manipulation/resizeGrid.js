import removeGridItems from "./removeGridItems";
import createGridItems from "./createGridItems";
import currentInput from "./currentInput";
import activateGridItems from "./activateGridItems";

function resizeGrid(value) {
  removeGridItems();
  createGridItems(value);
  activateGridItems(currentInput.color)
}

export default resizeGrid;