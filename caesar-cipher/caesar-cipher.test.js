import { CaesarCipher } from "./caesar-cipher.js";

const cipher = new CaesarCipher();

test("encrypt string", () => {
  expect(cipher.encrypt(3, "hello")).toBe("khoor");
});

test("preserve case", () => {
  expect(cipher.encrypt(3, "heLLo")).toBe("khOOr");
});

test("preserve non-alphabetic characters", () => {
  expect(cipher.encrypt(3, "Hello, World!")).toBe("Khoor, Zruog!");
});
