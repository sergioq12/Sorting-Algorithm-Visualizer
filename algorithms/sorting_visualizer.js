var container = document.getElementsByClassName("sorting-container")[0];
function generateNewArray(size) {
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let random_height = Math.random() * 700;
    container.innerHTML += `<div class='sorting-bar' style='height: ${random_height}px'><div>`;
  }
}

var newArrayButton = document.getElementById("newArray");
newArrayButton.addEventListener("click", () => {
  const arraySizeInput = document.querySelector("#array_size");
  generateNewArray(parseInt(arraySizeInput.value));
});

function wait(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

function swap(element1, element2) {
  let temp = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = temp;
}

function disableButtons() {
  document.getElementById("newArray").disabled = true;
  document.getElementById("selectionSort").disabled = true;
  document.getElementById("bubbleSort").disabled = true;
  document.getElementById("insertionSort").disabled = true;
  document.getElementById("mergeSort").disabled = true;
  document.getElementById("quickSort").disabled = true;
  document.getElementById("array_size").disabled = true;
}

function enableButtons() {
  document.getElementById("newArray").disabled = false;
  document.getElementById("selectionSort").disabled = false;
  document.getElementById("bubbleSort").disabled = false;
  document.getElementById("insertionSort").disabled = false;
  document.getElementById("mergeSort").disabled = false;
  document.getElementById("quickSort").disabled = false;
  document.getElementById("array_size").disabled = false;
}

function getBars() {
  return document.getElementsByClassName("sorting-bar");
}

let speed = 100;
const speedInput = document.querySelector("#speed_value");
// Event listener to update speed
speedInput.addEventListener("input", () => {
  speed = 100 - parseInt(speedInput.value);
});

const arraySizeInput = document.querySelector("#array_size");
// Event listener to update speed
arraySizeInput.addEventListener("input", () => {
  generateNewArray(parseInt(arraySizeInput.value));

});

export { generateNewArray, wait, swap, disableButtons, getBars, speed };
