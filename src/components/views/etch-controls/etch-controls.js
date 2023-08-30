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

export {colorInputPubSub, partyBtnPubSub};