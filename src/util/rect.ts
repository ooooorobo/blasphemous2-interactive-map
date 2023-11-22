import { Rect } from '../type/Rect.ts';
import { Point } from '../type/Point.ts';

export const makeRect = (leftTop: Point, width: number, height: number) => {
  return {
    left: leftTop.x,
    top: leftTop.y,
    right: leftTop.x + width,
    bottom: leftTop.y + height,
  } satisfies Rect;
};