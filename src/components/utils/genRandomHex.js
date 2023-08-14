/* Generates random Hex string */
function genRandomHex() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}