import { describe, expect, test } from 'vitest';
import { getTileRange, getTileSize, getZoomScale } from './calculator.ts';

describe('getZoomScale', () => {
  test.each([
    [5, 0.5],
    [4, 1],
    [3, 2],
    [2, 4],
    [1, 8],
    [0, 16],
  ])('레벨이 %s일 때 배율은 %s이다', (receivedLevel, expectedScale) => {
    const result = getZoomScale(receivedLevel);

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


describe('getTileSize', () => {
  test.each([
    [5, 512],
    [4, 1024],
    [3, 2048],
    [2, 4096],
    [1, 8192],
    [0, 16384],
  ])('배율이 %s일 때 타일 한 변의 크기는 %s이다', (receivedLevel, expectedSize) => {
    const result = getTileSize(receivedLevel);

    expect(result).toBe(expectedSize);
  });
});

describe('getTileRange', () => {
  test.each([
    [1000, { left: 0, top: 0, right: 2000, bottom: 2000 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
    [1000, { left: 300, top: 0, right: 2300, bottom: 2000 }, { x: 0, y: 0 }, { x: 2, y: 1 }],
    [1000, { left: 300, top: 300, right: 2300, bottom: 2300 }, { x: 0, y: 0 }, { x: 2, y: 2 }],
    [1000, { left: -300, top: -300, right: 2300, bottom: 2300 }, { x: 0, y: 0 }, { x: 2, y: 2 }],
  ])('%s %s %s %s', (tileSize, windowRect, expectedStart, expectedLast) => {
    const { start, last } = getTileRange({ tileSize, windowRect });

    expect(start).toEqual(expectedStart);
    expect(last).toEqual(expectedLast);
  });
});
