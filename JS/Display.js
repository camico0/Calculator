class Display {
    constructor(displayInitialValue, displayFinalValue) {
        this.displayInitialValue = displayInitialValue;
        this.displayFinalValue = displayFinalValue;
        this.calculator = new Calculator();
        this.operatorType = undefined;
        this.initialValue = "";
        this.finalValue = "";
        this.signs = {
            sum: "+",
            divide: "/",
            multiply: "x",
            rest: "-",
        };
    }

    addNumber(number) {
        //if there is already a point, don't add it
        if (number === "." && this.initialValue.includes(".")) return;
        //the final value is equal to the number we receive
        this.initialValue = this.initialValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayFinalValue.textContent = this.finalValue;
        this.displayInitialValue.textContent = `${this.initialValue} ${
      this.signs[this.operatorType] || ""
    }`;
    }

    evaluate(type) {
        this.operatorType !== "isequal" && this.calculate();
        this.operatorType = type;
        this.finalValue = this.initialValue || this.finalValue;
        this.initialValue = "";
        this.printValues();
    }

    delete() {
        this.initialValue = this.initialValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.initialValue = "";
        this.finalValue = "";
        this.printValues();
    }

    calculate() {
        const initialValue = parseFloat(this.initialValue);
        const finalValue = parseFloat(this.finalValue);

        console.log(initialValue, finalValue);

        if (isNaN(initialValue) || isNaN(finalValue)) return;
        this.finalValue = this.calculator[this.operatorType](
            initialValue,
            finalValue
        );

        this.initialValue = this.finalValue;
    }
}