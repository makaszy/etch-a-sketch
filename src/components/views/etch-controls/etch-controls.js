import PubSub from "../../utils/pubSub";

//Color inputs

const colorPubSub = new PubSub();
const colorInput = document.querySelector(".etch-controls__input--color");
const partyBtn = document.querySelector(".etch-controls__btn--party");
const eraserBtn = document.querySelector(".etch-controls__btn--eraser");

[colorInput, partyBtn, eraserBtn].forEach((input) => {
  input.addEventListener("click", () => {colorPubSub.publish(input.value)});
  if (input === colorInput) {
    colorInput.addEventListener("input", () => {colorPubSub.publish(colorInput.value)});
  }
})

//Clear button

const clearBtnPubSub = new PubSub();
const clearBtn = document.querySelector(".etch-controls__btn--clear");

clearBtn.addEventListener("click", () => {clearBtnPubSub.publish()})

//Size input

const sizeInputPubSub = new PubSub();
const sizeInput = document.querySelector(".etch-controls__input--size");

sizeInput.addEventListener("input", () => {sizeInputPubSub.publish(sizeInput.value)})

export {colorPubSub, clearBtnPubSub, sizeInputPubSub};

