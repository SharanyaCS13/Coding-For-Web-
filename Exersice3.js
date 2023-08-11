const colorButton = document.getElementById('colorButton');
const sizeButton = document.getElementById('sizeButton');
const colorBox = document.getElementById('colorBox');
const textInput = document.getElementById("textInput");
  const dynamicText = document.getElementById("dynamicText")

let isBlue = true; // Initial color state
let isSmall = true; // Initial size state

colorButton.addEventListener('click', () => {
  // Toggle between two colors
  if (isBlue) {
    colorBox.style.backgroundColor = 'red';
  } else {
    colorBox.style.backgroundColor = 'blue';
  }
  isBlue = !isBlue;
});

sizeButton.addEventListener('click', () => {
  // Toggle between two sizes
  if (isSmall) {
    colorBox.style.width = '200px';
    colorBox.style.height = '200px';
  } else {
    colorBox.style.width = '150px';
    colorBox.style.height = '150px';
  }
  isSmall = !isSmall;
});

textInput.addEventListener("input", () => {
    dynamicText.textContent = textInput.value;
  });
