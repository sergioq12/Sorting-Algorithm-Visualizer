import {generateNewArray, wait, swap, disableButtons, getBars, speed} from "./sorting_visualizer.js";
const insertionSortButton = document.getElementById("insertionSort");
var bars = getBars();
async function insertionSort() {
  for (let i = 1; i < bars.length; i++) {
    let j = i - 1;
    let temp = bars[i].style.height;
    bars[i].style.background = "red";
    await wait(speed);
    while (j >= 0 && parseInt(temp) < parseInt(bars[j].style.height)) {
      bars[j].style.background = "red";
      bars[j + 1].style.height = bars[j].style.height;
      j--;
      await wait(speed);
      // color
      for (let k = i; k >= 0; k--) {
        bars[k].style.background = "green";
      }
    }
    bars[j + 1].style.height = temp;
    bars[i].style.background = "green";
  }
}

insertionSortButton.addEventListener("click", async function () {
  disableButtons();
  await insertionSort();
});
