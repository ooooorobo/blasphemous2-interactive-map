import { MAX_ZOOM_SCALE, MIN_TILE_RANGE, ORIGINAL_TILE_SIZE } from './constants.ts';
import { isValidLevel } from './validator.ts';
import { Rect } from '../../type/Rect.ts';
import { Point } from '../../type/Point.ts';

export const getZoomScale = (level: number) => {
  if (!isValidLevel(level)) {
    throw new Error('Level is invalid');
  }
  return MAX_ZOOM_SCALE * 2 ** (-1 * level);
};

export const getTileSize = (level: number) => {
  const scale = getZoomScale(level);
  return scale * ORIGINAL_TILE_SIZE;
};

export const getTileRange = (tileSize: number, windowRect: Rect): { start: Point; last: Point; } => {
  const start = {
    x: Math.max(MIN_TILE_RANGE, Math.floor(windowRect.left / tileSize)),
    y: Math.max(MIN_TILE_RANGE, Math.floor(windowRect.top / tileSize)),
  };
  const last = {
    x: Math.max(MIN_TILE_RANGE, Math.ceil(windowRect.right / tileSize) - 1),
    y: Math.max(MIN_TILE_RANGE, Math.ceil(windowRect.bottom / tileSize) - 1),
  };
  return { start, last };
};
