export class CaesarCipher {
  constructor() {
    this.plainAlphabetsLower = "abcdefghijklmnopqrstuvwxyz";
    this.plainAlphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  shiftLetters(offset) {
    let uppercase = "";
    let lowercase = "";

    for (let i = 0; i < this.plainAlphabetsLower.length; i++) {
      const shiftedIndex = (offset + i) % this.plainAlphabetsLower.length;

      lowercase += this.plainAlphabetsLower[shiftedIndex];
      uppercase += this.plainAlphabetsUpper[shiftedIndex];
    }

    return { uppercase, lowercase };
  }

  encrypt(shift, string) {
    const cipherAlphabets = this.shiftLetters(shift);

    let encryptedString = [];

    for (let i = 0; i < string.length; i++) {
      const letter =
        this.plainAlphabetsLower.indexOf(string[i]) === -1
          ? cipherAlphabets.uppercase[
              this.plainAlphabetsUpper.indexOf(string[i])
            ]
          : cipherAlphabets.lowercase[
              this.plainAlphabetsLower.indexOf(string[i])
            ];

      encryptedString.push(letter);
    }
    return encryptedString.join("");
  }
}
