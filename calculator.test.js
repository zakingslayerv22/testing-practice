import { Calculator } from "./calculator.js";

const calculator = new Calculator();

test("add numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("handle non-number input", () => {
  expect(calculator.add("Two", "Three")).toBe("Only digits accepted");
});

test("subtract numbers", () => {
  expect(calculator.subtract(4, 3)).toBe(1);
});

test("multiply numbers", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("divide numbers", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});
