import PubSub from "../../utils/pubSub";

//Color input
const colorInputPubSub = new PubSub();
const colorInput = document.querySelector(".etch-controls__input--color");

colorInput.addEventListener("click", () => {colorInputPubSub.publish(colorInput.value)});
colorInput.addEventListener("input", () => {colorInputPubSub.publish(colorInput.value)});

//Party button

const partyBtnPubSub = new PubSub();
const partyBtn = document.querySelector(".etch-controls__btn--party");

partyBtn.addEventListener("click", () => {partyBtnPubSub.publish("party")})

//Eraser button

const eraserBtnPubSub = new PubSub();
const eraserBtn = document.querySelector(".etch-controls__btn--eraser");

eraserBtn.addEventListener("click", () => {eraserBtnPubSub.publish("#FFFFFF")})

//Clear button

const clearBtnPubSub = new PubSub();
const clearBtn = document.querySelector(".etch-controls__btn--clear");

clearBtn.addEventListener("click", () => {clearBtnPubSub.publish()})

export {colorInputPubSub, partyBtnPubSub, eraserBtnPubSub, clearBtnPubSub};

