/* Create grid-items for the grid */

function createGridItems(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("etch-grid__grid-item");
    wrapper = document.querySelector(".etch-grid");
    wrapper.appendChild(div);
  }
}

export default createGridItems;