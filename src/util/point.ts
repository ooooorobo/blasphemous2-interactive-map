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

/**
 * originPoint를 움직이지 않으면서 scaleRatio만큼 배율이 변경될 경우 새로운 leftTop 위치를 계산
 * @param currentLeftTop
 * @param originPoint
 * @param scaleRatio
 */
export const convertLeftTopBy = (currentLeftTop: Point, originPoint: Point, scaleRatio: number): Point => {
  return { x: currentLeftTop.x - originPoint.x * (scaleRatio - 1), y: currentLeftTop.y - originPoint.y * (scaleRatio - 1) };
};

export const convertPointToOtherLeftTop = (point: Point, currentLeftTop: Point, nextLeftTop: Point) => {
  return { x: point.x + currentLeftTop.x - nextLeftTop.x, y: point.y + currentLeftTop.y - nextLeftTop.y };
};