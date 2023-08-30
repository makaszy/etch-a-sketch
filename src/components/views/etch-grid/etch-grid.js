import activateGridItems from "./etch-grid--manipulation/activateGridItems";
import { colorInputPubSub , partyBtnPubSub, eraserBtnPubSub  } from "../etch-controls/etch-controls";

colorInputPubSub.subscribe(activateGridItems);
partyBtnPubSub.subscribe(activateGridItems); 
eraserBtnPubSub.subscribe(activateGridItems);