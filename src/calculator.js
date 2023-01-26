class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  static add(number1, number2) {
    return number1 + number2;
  }

  static subtract(number1, number2) {
    return number1 - number2;
  }

  static multiply(number1, number2) {
    return number1 * number2;
  }

  static divide(number1, number2) {
    return number1 / number2;
  }
}

// const calculator = new Calculator();

module.exports = Calculator;
