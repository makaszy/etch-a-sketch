import removeGridItems from "./removeGridItems";
import createGridItems from "./createGridItems";

function resizeGrid(value) {
  removeGridItems();
  createGridItems(value);
}

export default resizeGrid;