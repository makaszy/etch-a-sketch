function removeGridItems() {
  const gridItems = document.querySelectorAll(".etch-grid__grid-item");
  gridItems.forEach((gridItem) => {
    gridItem.remove();
  })
}

export default removeGridItems;