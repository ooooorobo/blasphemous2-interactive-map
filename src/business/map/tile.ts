const columnCount: Record<string, number> = {
  '0': 10,
  '1': 5,
  '2': 3,
};

export const isValidPoint = (x: number, y: number, columnCount: number) => {
  return x < columnCount && (x + columnCount * y) <= 100;
};

export const getColumnCount = (level: number) => {
  return columnCount[level.toString()] ?? 0;
};

export const getFileName = (x: number, y: number, level: number) => {
  return `/map/tile/${level}/tile${(x + getColumnCount(level) * y).toString().padStart(3, '0')}.png`;
};