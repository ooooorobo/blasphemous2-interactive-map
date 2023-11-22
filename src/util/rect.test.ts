import { describe, expect, test } from 'vitest';
import { makeRect } from './rect.ts';
import { Point } from '../type/Point.ts';

describe('makeRect', () => {
  test.each([[
    { leftTop: { x: 0, y: 0 }, width: 1000, height: 500 }, { left: 0, top: 0, right: 1000, bottom: 500 },
  ], [
    { leftTop: { x: -300, y: 500 }, width: 1000, height: 500 }, { left: -300, top: 500, right: 700, bottom: 1000 },
  ]])('%s 일 때, rect는 %s이다', ({ leftTop, width, height }: {
    leftTop: Point,
    width: number,
    height: number
  }, expectedRect) => {
    const result = makeRect(leftTop, width, height);

    expect(result).toEqual(expectedRect);
  });
});