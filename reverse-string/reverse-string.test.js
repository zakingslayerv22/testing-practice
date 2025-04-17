import { reverseString } from "./reverse-string.js";

test("reverse string", () => {
  expect(reverseString("olleH")).toBe("Hello");

  expect(reverseString("efinK")).toBe("Knife");
});

test("reverse sentences", () => {
  expect(reverseString("efinK olleH")).toBe("Hello Knife");
});

test("handle numbers as strings", () => {
  expect(reverseString("173")).toBe("371");
});

test("handle empty string", () => {
  expect(reverseString("")).toBe("");
});

test("handle single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("handle special characters", () => {
  expect(reverseString("&#@!")).toBe("!@#&");
});
