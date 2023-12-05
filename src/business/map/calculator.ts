import { MAX_ZOOM_LEVEL, MAX_ZOOM_SCALE, MIN_TILE_RANGE } from './constants.ts';
import { isValidLevel } from './validator.ts';
import { Rect } from '../../type/Rect.ts';
import { Point } from '../../type/Point.ts';

export const getZoomScale = (level: number, maxZoomScale = MAX_ZOOM_SCALE, maxZoomLevel = MAX_ZOOM_LEVEL) => {
  if (!isValidLevel(level, maxZoomLevel)) {
    throw new Error('Level is invalid');
  }
  return maxZoomScale * 2 ** -level;
};

export const getTileRange = ({
                               tileSize = 1024,
                               mapLeftTop = { x: 0, y: 0 },
                               windowRect,
                               padding = 0,
                               minTileRange = MIN_TILE_RANGE,
                             }: {
  windowRect: Rect,
  tileSize?: number,
  mapLeftTop?: Point,
  padding?: number,
  minTileRange?: number
}): {
  start: Point;
  last: Point;
} => {
  const start = {
    x: Math.max(minTileRange, Math.floor((windowRect.left - mapLeftTop.x) / tileSize) - padding),
    y: Math.max(minTileRange, Math.floor((windowRect.top - mapLeftTop.y) / tileSize) - padding),
  };
  const last = {
    x: Math.max(minTileRange, Math.ceil((windowRect.right - mapLeftTop.x) / tileSize) + 1 + padding),
    y: Math.max(minTileRange, Math.ceil((windowRect.bottom - mapLeftTop.y) / tileSize) + 1 + padding),
  };
  return { start, last };
};

