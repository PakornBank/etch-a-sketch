function generateGrid(size) {
  let container = document.createElement("div");
  container.setAttribute("id", "container");
  let row = document.createElement("div");

  row.classList.add("row");
  for (let i = 0; i < size; ++i) {
    let cell = document.createElement("div");

    cell.classList.add("cell");
    let marginSize = 50 / size;
    cell.style.margin = `${marginSize}px`;
    row.appendChild(cell);
  }

  for (let i = 0; i < size; ++i) {
    container.appendChild(row.cloneNode(true));
  }

  grid.appendChild(container);

  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < cells.length; ++i) {
    cells[i].addEventListener("mouseover", () => {
      cells[i].style.backgroundColor = randomRGB();
      //   cells[i].style.transition = "";
    });
    // cells[i].addEventListener("mouseleave", () => {
    //   cells[i].style.backgroundColor = "white";
    //   cells[i].style.transition = "background-color 1s";
    // });
  }
}

function clear() {
  const container = document.getElementById("container");
  grid.removeChild(container);
}

function randomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  // return as a string rgb for style
  return `rgb(${r},${g},${b})`;
}

const grid = document.getElementById("grid");
const changeSizeButton = document.getElementById("changeSizeButton");
const clearButton = document.getElementById("clearButton");

let gridSize = 16;

generateGrid(gridSize);

changeSizeButton.addEventListener("click", () => {
  let newSize = prompt("Number of squares per side");
  if (newSize > 100) {
    alert("Too large number, try again.");
    return;
  }
  clear();
  generateGrid(newSize);
  gridSize = newSize;
});

// eraserButton.addEventListener("click", () => {
//   const cells = document.querySelectorAll(".cell");

//   for (let i = 0; i < cells.length; ++i) {
//     cells[i].addEventListener("mouseover", () => {
//       cells[i].style.backgroundColor = "white";
//     });
//   }
// });

clearButton.addEventListener("click", () => {
  clear();
  generateGrid(gridSize);
});
