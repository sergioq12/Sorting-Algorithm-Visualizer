import {generateNewArray, wait, swap, disableButtons, getBars, speed} from "./sorting_visualizer.js";
const bubbleSortButton = document.getElementById("bubbleSort");
var bars = getBars();
async function bubbleSort() {
  for (let i = 0; i < bars.length - 1; i++) {
    let swapping = false;
    for (let j = 0; j < bars.length - 1 - i; j++) {
      bars[j].style.background = "red";
      bars[j + 1].style.background = "red";
      await wait(speed);
      if (bars[j + 1].clientHeight < bars[j].clientHeight) {
        await wait(speed);
        swap(bars[j], bars[j + 1]);
        swapping = true;
      }
      bars[j].style.background = "aqua";
      bars[j + 1].style.background = "aqua";
    }
    bars[bars.length - 1 - i].style.background = "green";
    if (!swapping) {
      for (let j = i; j >= 0; j--) {
        bars[j].style.background = "green";
      }
      break;
    }
  }
}
bubbleSortButton.addEventListener("click", async function () {
  disableButtons();
  await bubbleSort();
});