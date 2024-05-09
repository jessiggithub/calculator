//Get elements
const display = document.getElementById("display")
const button = document.querySelectorAll(".buttons button")

//Add event listeners

button.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            calculate();
        } else if (button.textContent === "C") {
            clearDisplay();
        } else {
            appendToDisplay(button.textContent);
        }
    })
});
 //Functions

 function appendToDisplay(value) {
    display.value += value;
 }
 function clearDisplay() {
    display.value = ""
 }
 function calculate () {
    const result = eval(display.value);
    display.value = result;
 }

 function calculatePercentage(value, percentage) {
    return value * (percentage / 100);
}
