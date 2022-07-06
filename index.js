console.log("Hello");
let doesOGo = true;
const O = "O";
const X = "X";

function handleClick(event) {
  const target = event.target;
  if (target.innerText === "") {
    target.innerText = doesOGo ? O : X;
    doesOGo = !doesOGo;
  }
}

const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});
