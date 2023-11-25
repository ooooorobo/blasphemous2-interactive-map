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

export const getTileRange = ({ tileSize, mapLeftTop = { x: 0, y: 0 }, windowRect, padding = 0 }: {
  tileSize: number,
  mapLeftTop?: Point,
  windowRect: Rect,
  padding?: number
}): {
  start: Point;
  last: Point;
} => {
  const start = {
    x: Math.max(MIN_TILE_RANGE, Math.floor((windowRect.left - mapLeftTop.x) / tileSize) - padding),
    y: Math.max(MIN_TILE_RANGE, Math.floor((windowRect.top - mapLeftTop.y) / tileSize) - padding),
  };
  const last = {
    x: Math.max(MIN_TILE_RANGE, Math.ceil((windowRect.right - mapLeftTop.x) / tileSize) + 1 + padding),
    y: Math.max(MIN_TILE_RANGE, Math.ceil((windowRect.bottom - mapLeftTop.y) / tileSize) + 1 + padding),
  };
  return { start, last };
};

export const convert = (point: Point, screenLeftTop: Point, mapLeftTop: Point) => {
  return { x: point.x + screenLeftTop.x - mapLeftTop.x, y: point.y + screenLeftTop.y - mapLeftTop.y };
};