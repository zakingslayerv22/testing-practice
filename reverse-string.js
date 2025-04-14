export function reverseString(string) {
  const splitString = string.split("");

  let text = "";
  for (let i = splitString.length - 1; i >= 0; i--) {
    text = text + splitString[i];
  }

  return text;
}
