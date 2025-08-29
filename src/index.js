module.exports = function reverse(n) {
  const nStr = Math.abs(n).toString();
  const revString = nStr.split('').reverse().join('');
  return Number(revString);
};
