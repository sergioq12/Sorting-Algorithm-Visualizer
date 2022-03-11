import {
  generateNewArray,
  wait,
  swap,
  disableButtons,
  getBars,
  speed,
} from "./sorting_visualizer.js";

const selectionSortButton = document.getElementById("selectionSort");
var bars = getBars();
async function selectionSort() {
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "blue";
    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = "red";
      await wait(speed);
      if (parseInt(bars[j].style.height) < parseInt(bars[i].style.height)) {
        await wait(speed);
        swap(bars[i], bars[j]);
      }
      bars[j].style.background = "aqua";
    }
    bars[i].style.background = "green";
  }
}

function selectionSortSynchronous() {
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.background = "blue";
    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = "red";
      if (parseInt(bars[j].style.height) < parseInt(bars[i].style.height)) {
        swap(bars[i], bars[j]);
      }
      bars[j].style.background = "aqua";
    }
    bars[i].style.background = "green";
  }
}

selectionSortButton.addEventListener("click", async function () {
  disableButtons();
  await selectionSort();
});

// selectionSortButton.addEventListener("click", function () {
//   disableButtons();
//   selectionSortSynchronous();
// });
