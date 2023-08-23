//Sets background color for all grid-items to white

function resetGridItems() {
  const gridItems = document.querySelectorAll(".etch-grid__grid-item");
  gridItems.forEach((gridItem) => {
      gridItem.setAttribute("style", "background-color: white") 
})}

export default resetGridItems;