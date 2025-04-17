import { capitalize } from "./capitalize.js";

test("capitalize first letter", () => {
  expect(capitalize("medal")).toBe("Medal");

  expect(capitalize("win")).toBe("Win");
});

test("handle all caps input", () => {
  expect(capitalize("UPPERCASE")).toBe("UPPERCASE");
});

test("handle mixed caps input", () => {
  expect(capitalize("mIXED")).toBe("MIXED");
});

test("handle number as first letter", () => {
  expect(capitalize("4irst")).toBe("4irst");
});

test("handle empty strings", () => {
  expect(capitalize("")).toBe("");
});

test("handle sentence input", () => {
  expect(capitalize("i am Bjorn")).toBe("I am Bjorn");
});
