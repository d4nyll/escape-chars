module.exports = function escapeChars(string, chars) {
  let result = string;
  let index = 0;
  while (index <= result.length) {
    if (chars.includes(result[index])) {
      result = result.slice(0, index) + "\\" + result.slice(index);
      index = index + 2;
      continue;
    }
    index = index + 1;
  }
  return result;
}
