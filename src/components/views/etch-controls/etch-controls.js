import PubSub from "../../utils/pubSub";

//Color input
const colorInputPubSub = new PubSub();
const colorInput = document.querySelector(".etch-controls__input--color");

colorInput.addEventListener("input",() => {colorInputPubSub.publish(colorInput.value)} );
colorInput.addEventListener("click", colorInputPubSub.publish(colorInput.value));

//

export {colorInputPubSub};