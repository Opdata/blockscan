function hexToString(hex) {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
}

function intToHex(number) {
  console.log(number.toString(16));
}
// intToHex(9459861);

module.exports = {
  hexToString,
  intToHex,
};
