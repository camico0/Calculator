// my values
const displayInitialValue = document.getElementById("initial-value");
const displayFinalValue = document.getElementById("final-value");

const buttonsNumber = document.querySelectorAll(".number");

const buttonsOperator = document.querySelectorAll(".operator");

const deleteOperator = document.getElementById("delete");

const deleteAllOperator = document.getElementById("deleteAll");

const display = new Display(displayInitialValue, displayFinalValue);

buttonsNumber.forEach((button) => {
    button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonsOperator.forEach((button) => {
    button.addEventListener("click", () => display.evaluate(button.value));
});

deleteOperator.addEventListener("click", () => display.delete());

deleteAllOperator.addEventListener("click", () => display.deleteAll());

document
    .getElementById("equal")
    .addEventListener("click", () => display.calculate());