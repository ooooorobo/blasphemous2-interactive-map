export const isValidPoint = (x: number, y: number) => {
  return x < 7 && (x + 7 * y) <= 41;
};

export const getFileName = (x: number, y: number) => {
  return `/map/tile/0/tile${(x + 7 * y).toString().padStart(3, '0')}.png`;
};