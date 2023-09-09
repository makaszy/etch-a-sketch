import isValidHex from "../../../utils/isValidHex";
import { colorPubSub } from "../../etch-controls/etch-controls";

let currentInput = {
  col: "#000000",

  setColor(color) {
    if (!isValidHex(color) && color !== "party") {
      throw new Error("Invalid Input: set currentInput color failed")
    }
    this.col = color;
  },

  get color() {
    return this.col
  }
}
let setColorBound = currentInput.setColor.bind(currentInput);

colorPubSub.subscribe(setColorBound)

export default currentInput;