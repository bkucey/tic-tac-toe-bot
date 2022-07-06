console.log("Hello");

function handleClick(event) {
  console.log("tile clicked");
  console.log(event.target);
}

const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});
