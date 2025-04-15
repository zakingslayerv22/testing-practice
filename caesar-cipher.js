export class CaesarCipher {
  constructor(shift, string) {
    this.shift = shift;
    this.string = string;
    this.plainTextAlphabets = "abcdefghijklmnopqrstuvwxyz";
  }

  shiftLetters(offset) {
    let cipherTextAlphabets = "";

    for (let i = 0; i < this.plainTextAlphabets.length; i++) {
      const shiftedIndex = (offset + i) % this.plainTextAlphabets.length;
      cipherTextAlphabets += this.plainTextAlphabets[shiftedIndex];
    }

    return cipherTextAlphabets;
  }
}
