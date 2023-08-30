import activateGridItems from "./etch-grid--manipulation/activateGridItems";
import resetGridItems from "./etch-grid--manipulation/resetGridItems";
import { colorInputPubSub , partyBtnPubSub, eraserBtnPubSub, clearBtnPubSub  } from "../etch-controls/etch-controls";

colorInputPubSub.subscribe(activateGridItems);
partyBtnPubSub.subscribe(activateGridItems); 
eraserBtnPubSub.subscribe(activateGridItems);
clearBtnPubSub.subscribe(resetGridItems);