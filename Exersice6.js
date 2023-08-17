// Get references to the elements
const button = document.querySelector("button");
const boxDiv = document.getElementById("box");

// Add a click event listener to the button
button.addEventListener("click", () => {
    // Toggle the visibility of the boxDiv
    boxDiv.style.display = boxDiv.style.display === "none" ? "block" : "none";
});

// Function to hide the first div and make the button visible
function applyBreakpoint2Changes() {
    const firstDiv = document.querySelector("section#s5 > div");
    const button = document.querySelector("button");
    
    firstDiv.style.display = "none";
    button.style.display = "block";
}

// Check the initial viewport width and apply changes accordingly
function checkViewportWidth() {
    if (window.innerWidth <= 600) {
        applyBreakpoint2Changes();
    }
}

// Add an event listener to check viewport width when the window is resized
window.addEventListener("resize", checkViewportWidth);

// Check viewport width when the page loads
checkViewportWidth();
