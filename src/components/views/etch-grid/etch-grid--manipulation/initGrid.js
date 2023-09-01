import createGridItems from "./createGridItems";
import activateGridItems from "./activateGridItems";

function initGrid() {
  createGridItems(16);
  activateGridItems("#000000")
}

export default initGrid;