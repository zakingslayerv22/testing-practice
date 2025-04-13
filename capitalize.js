export function capitalize(input) {
  if (input === "") return "";

  const splitText = input.split("");
  const firstLetter = splitText.shift().toUpperCase();
  splitText.unshift(firstLetter);

  return splitText.join("");
}
