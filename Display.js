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
            module: "%",
        };
    }

    addNumber(number) {
        //if there is already a point, don't add it
        if (number === "." && this.initialValue.includes(".")) return;
        //the final value is equal to the number we receive
        if (this.initialValue.length < 23) {
            this.initialValue = this.initialValue.toString() + number.toString();
            this.printValues();
        }
    }

    printValues() {
        if (this.finalValue.length > 18) {
            this.finalValue = this.finalValue.substring(0, 18);
        }

        this.displayFinalValue.textContent = this.finalValue;
        this.displayInitialValue.textContent = ` ${
      this.signs[this.operatorType] || ""
    } ${this.initialValue}`;
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

        let result = this.calculator[this.operatorType](finalValue, initialValue);

        this.finalValue = result;
        this.initialValue = this.finalValue;
    }
}