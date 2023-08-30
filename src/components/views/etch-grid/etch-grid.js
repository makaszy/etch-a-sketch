import activateGridItems from "./etch-grid--manipulation/activateGridItems";
import { colorInputPubSub , partyBtnPubSub } from "../etch-controls/etch-controls";

colorInputPubSub.subscribe(activateGridItems);
partyBtnPubSub.subscribe(activateGridItems); 