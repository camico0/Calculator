class Calculator {
    sum(num1, num2) {
        return num1 + num2;
    }

    rest(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        if (display.initialValue == 0) {
            display.initialValue == "";
        } else {
            return num1 / num2;
        }
    }
}