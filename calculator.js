export class Calculator {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return "Only digits accepted";
    return a + b;
  }

  subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return "Only digits accepted";
    return a - b;
  }

  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return "Only digits accepted";
    return a * b;
  }

  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      return "Only digits accepted";
    return a / b;
  }
}
