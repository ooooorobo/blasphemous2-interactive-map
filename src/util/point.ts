import { Point } from '../type/Point.ts';

export const generatePointListInRange = (start: Point, last: Point): Point[] => {
  if (start.x > last.x || start.y > last.y) {
    throw new Error('invalid range');
  }

  const result = [];

  for (let i = start.x; i <= last.x; i++) {
    for (let j = start.y; j <= last.y; j++) {
      result.push({ x: i, y: j });
    }
  }

  return result;
};