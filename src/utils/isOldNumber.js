export const isOddNumber = (number) => {
  if (typeof number !== 'number') {
    return undefined;
  }
  return Math.floor(number / 2) !== number / 2;
}