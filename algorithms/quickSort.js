import {
  generateNewArray,
  wait,
  swap,
  disableButtons,
  getBars,
  speed,
} from "./sorting_visualizer.js";
const quickSortButton = document.getElementById("quickSort");
var bars = getBars();
async function quickSort(left, right) {
  if (left >= right) {
    // This allow me to color it green after each little partition is sorted
    if (left >= 0 && right >= 0 && left < bars.length && right < bars.length) {
      bars[right].style.background = "green";
      bars[left].style.background = "green";
    }
    return;
  }
  let i = left;
  let j = right;
  // pivot will be the left element
  const pivot = bars[left];
  pivot.style.background = "black";
  await wait(speed);
  while (i <= j) {
    // get an element greater than the pivot
    while (parseInt(bars[i].style.height) < parseInt(pivot.style.height)) {
      await wait(speed);
      bars[i].style.background = "pink";
      i++;
    }
    bars[i].style.background = "blue";
    while (parseInt(bars[j].style.height) > parseInt(pivot.style.height)) {
      await wait(speed);
      bars[j].style.background = "orange";
      j--;
    }
    bars[j].style.background = "red";
    if (i <= j) {
      bars[i].style.background = "aqua";
      bars[j].style.background = "aqua";
      await wait(speed);
      const temp = bars[i].style.height;
      bars[i++].style.height = bars[j].style.height;
      bars[j--].style.height = temp;
      await wait(speed);
      bars[i].style.background = "orange";
      bars[j].style.background = "orange";
    }
  }
  for (let k = 0; k < bars.length; k++) {
    if (bars[k].style.background != "green") bars[k].style.background = "cyan";
  }
  await wait(speed);
  pivot.style.background = "green";
  quickSort(i, right);
  quickSort(left, j);
}

quickSortButton.addEventListener("click", async () => {
  disableButtons();
  await quickSort(0, bars.length - 1);
});
