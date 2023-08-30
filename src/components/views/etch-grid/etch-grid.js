import activateGridItems from "./etch-grid--manipulation/activateGridItems";
import { colorInputPubSub } from "../etch-controls/etch-controls";

colorInputPubSub.subscribe(activateGridItems)