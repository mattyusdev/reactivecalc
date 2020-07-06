export const getDecimals = (num) => {
  if (!isNaN(num)) {
    if (Math.floor(num) === +num) return 0;
    return num.toString().split(".")[1].length;
  }
  return 0;
};
