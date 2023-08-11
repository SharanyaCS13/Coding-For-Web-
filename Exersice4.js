const textInput = document.getElementById("textInput");
  const dynamicText = document.getElementById("dynamicText");
const toggleButton = document.getElementById("toggleButton");
const subheading = document.getElementById("subheading");




textInput.addEventListener("input", () => {
    dynamicText.textContent = textInput.value;
  });
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const subheading = document.getElementById("subheading");

  toggleButton.addEventListener("click", () => {
    if (subheading.style.display === "none" || subheading.style.display === "") {
      subheading.style.display = "block"; // Show the subheading
    } else {
      subheading.style.display = "none"; // Hide the subheading
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fontRadios = document.querySelectorAll('input[name="font"]');
  const changeableParagraph = document.getElementById("changeableParagraph");

  fontRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        if (radio.value === "sans-serif") {
          changeableParagraph.style.fontFamily = radio.value;
        } else {
          changeableParagraph.style.fontFamily = `'${radio.value}', ${radio.value}`;
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const widthRange = document.getElementById("widthRange");
  const heightRange = document.getElementById("heightRange");
  const adjustableDiv = document.getElementById("adjustableDiv");

  widthRange.addEventListener("input", () => {
    adjustableDiv.style.width = widthRange.value + "px";
  });

  heightRange.addEventListener("input", () => {
    adjustableDiv.style.height = heightRange.value + "px";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const imageSelector = document.getElementById("imageSelector");
  const selectedImage = document.getElementById("selectedImage");

  imageSelector.addEventListener("change", () => {
    const selectedValue = imageSelector.value;
    selectedImage.src = selectedValue;
  });
});

