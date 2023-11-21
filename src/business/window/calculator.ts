import { Point } from '../../type/Point.ts';
import { Rect } from '../../type/Rect.ts';

export const calculateWindowRect = (leftTop: Point, width: number, height: number) => {
  return {
    left: leftTop.x,
    top: leftTop.y,
    right: leftTop.x + width,
    bottom: leftTop.y + height,
  } satisfies Rect;
};
