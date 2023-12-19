import { ORIGINAL_MAP_HEIGHT, ORIGINAL_MAP_WIDTH, ORIGINAL_TILE_SIZE } from './constants.ts';
import { IMAGE_BASE_URL } from '../../constants/url.ts';

const columnCount: Record<string, number> = {
  '0': 10,
  '1': 5,
  '2': 3,
};

export const isValidPoint = (x: number, y: number, scale: number) => {
  return x * ORIGINAL_TILE_SIZE <= ORIGINAL_MAP_WIDTH * scale && y * ORIGINAL_TILE_SIZE <= ORIGINAL_MAP_HEIGHT * scale;
};

export const getColumnCount = (level: number) => {
  return columnCount[level.toString()] ?? 0;
};

export const getFileName = (x: number, y: number, level: number) => {
  return IMAGE_BASE_URL + `/tile/${level}/tile${(x + getColumnCount(level) * y).toString().padStart(3, '0')}.png`;
};