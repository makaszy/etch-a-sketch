
/* Create grid-items for the grid */

function createGridItems(size) {
  if (+size === NaN) {
    throw new Error("Value is not a number!")
  }
  const amount = +size * +size;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.classList.add("etch-grid__grid-item");
    wrapper = document.querySelector(".etch-grid");
    wrapper.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`)
    wrapper.appendChild(div);
  }
}

export default createGridItems;