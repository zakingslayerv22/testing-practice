import { CaesarCipher } from "./caesar-cipher.js";

const cipher = new CaesarCipher();

test("encrypt string", () => {
  expect(cipher.encrypt(3, "hello")).toBe("khoor");
});
