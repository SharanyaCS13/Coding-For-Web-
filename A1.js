document.addEventListener("DOMContentLoaded", () => {
    const imageSelector = document.getElementById("imageSelector");
    const selectedImage = document.getElementById("selectedImage");
    const textInput = document.getElementById('textInput');
    const textInput2 = document.getElementById('textInput2');
    const displayText = document.getElementById('displayText');
    const displayText2 = document.getElementById('displayText2');
    const fontRadios = document.getElementsByName('font');
    const fontColorSelect = document.getElementById('fontColorSelect');
    const strokeIncrementer = document.getElementById('strokeIncrementer');
    const incrementStrokeBtn = document.getElementById('incrementStroke');
    const decrementStrokeBtn = document.getElementById('decrementStroke');

    imageSelector.addEventListener("change", () => {
        const selectedValue = imageSelector.value;
        selectedImage.src = selectedValue;
    });

    textInput.addEventListener('input', () => {
        displayText.textContent = textInput.value;
    });

    textInput2.addEventListener('input', () => {
        displayText2.textContent = textInput2.value;
    });

    fontRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedFont = radio.value;
            displayText.style.fontFamily = selectedFont;
            displayText2.style.fontFamily = selectedFont;
        });
    });

    fontColorSelect.addEventListener('change', () => {
        const selectedColor = fontColorSelect.value;
        displayText.style.color = selectedColor;
        displayText2.style.color = selectedColor;
    });

    incrementStrokeBtn.addEventListener('click', () => {
        const currentValue = parseFloat(strokeIncrementer.value);
        strokeIncrementer.value = currentValue + 1;
        applyStrokeToText();
    });

    decrementStrokeBtn.addEventListener('click', () => {
        const currentValue = parseFloat(strokeIncrementer.value);
        if (currentValue > 0) {
            strokeIncrementer.value = currentValue - 1;
            applyStrokeToText();
        }
    });

    strokeIncrementer.addEventListener('change', () => {
        applyStrokeToText();
    });

    function applyStrokeToText() {
        const strokeValue = strokeIncrementer.value + 'px';
        displayText.style.textShadow = `0 0 ${strokeValue} black`;
        displayText2.style.textShadow = `0 0 ${strokeValue} black`;
    }
});


// Your JavaScript goes here