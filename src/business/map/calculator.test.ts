import { describe, expect, test } from 'vitest';
import { getTileRange, getZoomScale } from './calculator.ts';

describe('getZoomScale', () => {
  test.each([
    [5, 0.5],
    [4, 1],
    [3, 2],
    [2, 4],
    [1, 8],
    [0, 16],
  ])('레벨이 %s일 때 배율은 %s이다', (receivedLevel, expectedScale) => {
    const result = getZoomScale(receivedLevel, 16, 5);

    expect(result).toBe(expectedScale);
  });

  test('레벨이 유효하지 않을 경우 에러를 던진다', () => {
    try {
      getZoomScale(-1);
      expect(true).toBe(false);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});


describe('getTileRange', () => {
  test.each([
    [1000, { left: 0, top: 0, right: 2000, bottom: 2000 }, { x: 0, y: 0 }, { x: 3, y: 3 }],
    [1000, { left: 300, top: 0, right: 2300, bottom: 2000 }, { x: 0, y: 0 }, { x: 4, y: 3 }],
    [1000, { left: 300, top: 300, right: 2300, bottom: 2300 }, { x: 0, y: 0 }, { x: 4, y: 4 }],
    [1000, { left: -300, top: -300, right: 2300, bottom: 2300 }, { x: 0, y: 0 }, { x: 4, y: 4 }],
  ])('%s %s %s %s', (tileSize, windowRect, expectedStart, expectedLast) => {
    const { start, last } = getTileRange({ tileSize, windowRect });

    expect(start).toEqual(expectedStart);
    expect(last).toEqual(expectedLast);
  });
});
