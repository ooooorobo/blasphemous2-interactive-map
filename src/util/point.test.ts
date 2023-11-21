import { describe, expect, test } from 'vitest';
import { generatePointListInRange } from './point.ts';

describe('generatePointListInRange', () => {
  test.each([
    [{ x: 0, y: 0 }, { x: 1, y: 1 }, [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }]],
    [{ x: 0, y: 0 }, { x: 0, y: 0 }, [{ x: 0, y: 0 }]],
  ])('%s, %s, %s', (start, last, expected) => {
    const result = generatePointListInRange(start, last);
    expect(result).toEqual(expected);
  });

  test.each([
    [{ x: 2, y: 0 }, { x: 1, y: 1 }],
    [{ x: 0, y: 2 }, { x: 1, y: 1 }],
  ])('%s %s으로 start가 last보다 클 경우 에러를 던진다', (start, last) => {
    expect(() => {
      generatePointListInRange(start, last);
    }).toThrowError();
  });
});