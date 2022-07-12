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
        if (num2 === 0) {
            return "math ERROR";
        } else {
            return num1 / num2;
        }
    }

    module(num1, num2) {
        return num1 % num2;
    }
}