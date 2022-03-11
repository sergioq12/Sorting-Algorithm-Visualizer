import {generateNewArray, wait, swap, disableButtons, getBars, speed} from "./sorting_visualizer.js";

const mergeSortButton = document.getElementById("mergeSort");
var bars = getBars();

async function merge(bars, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;
  let left = [];
  let right = [];

  for (let i = 0; i < n1; i++) {
    await wait(speed);
    // color
    bars[low + i].style.background = "orange";
    left[i] = bars[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await wait(speed);
    // color
    bars[mid + 1 + i].style.background = "yellow";
    right[i] = bars[mid + 1 + i].style.height;
  }
  await wait(speed);
  let i = 0;
  let j = 0;
  let k = low;
  while (i < n1 && j < n2) {
    await wait(speed);
    console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      console.log("Left In");
      // color
      if (n1 + n2 === bars.length) {
        bars[k].style.background = "green";
      } else {
        bars[k].style.background = "lightgreen";
      }

      bars[k++].style.height = left[i++];
    } else {
      console.log("Right In");
      // color
      if (n1 + n2 === bars.length) {
        bars[k].style.background = "green";
      } else {
        bars[k].style.background = "lightgreen";
      }
      bars[k++].style.height = right[j++];
    }
  }
  while (i < n1) {
    await wait(speed);
    // color
    if (n1 + n2 === bars.length) {
      bars[k].style.background = "green";
    } else {
      bars[k].style.background = "lightgreen";
    }
    bars[k++].style.height = left[i++];
  }
  while (j < n2) {
    await wait(speed);
    // color
    if (n1 + n2 === bars.length) {
      bars[k].style.background = "green";
    } else {
      bars[k].style.background = "lightgreen";
    }
    bars[k++].style.height = right[j++];
  }
}

async function mergeSort(bars, start, end) {
  console.log("In mergeSort()");
  if (start >= end) {
    return;
  }
  const m = start + Math.floor((end - start) / 2);
  await mergeSort(bars, start, m);
  await mergeSort(bars, m + 1, end);
  await merge(bars, start, m, end);
}

mergeSortButton.addEventListener("click", async function () {
  let l = 0;
  let end = bars.length - 1;
  disableButtons();
  await mergeSort(bars, l, end);
});
