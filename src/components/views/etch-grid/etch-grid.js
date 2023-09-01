import activateGridItems from "./etch-grid--manipulation/activateGridItems";
import resetGridItems from "./etch-grid--manipulation/resetGridItems";
import resizeGrid from "./etch-grid--manipulation/resizeGrid";
import initGrid from "./etch-grid--manipulation/initGrid";
import { colorPubSub, clearBtnPubSub, sizeInputPubSub } from "../etch-controls/etch-controls";

//Changes colors based on user input

colorPubSub.subscribe(activateGridItems)

// Clears and resizes the grid

clearBtnPubSub.subscribe(resetGridItems);
sizeInputPubSub.subscribe(resizeGrid);

//Initializes grid upon render

initGrid();

