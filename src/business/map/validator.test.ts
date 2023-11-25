import { describe, expect, test } from 'vitest';
import { isValidLevel } from './validator.ts';

describe('isValidLevel', () => {
  test.each([[0], [1], [2], [3], [4], [5]])('%s는 유효한 레벨이다', (receivedLevel) => {
    const result = isValidLevel(receivedLevel, 5);
    expect(result).toBeTruthy();
  });

  test('정수가 아니면 유효한 레벨이 아니다', () => {
    const result = isValidLevel(2.3, 5);
    expect(result).toBeFalsy();
  });

  test('음수는 유효한 레벨이 아니다', () => {
    const result = isValidLevel(-1, 5);
    expect(result).toBeFalsy();
  });

  test('최대 레벨보다 크면 유효하지 않다', () => {
    const result = isValidLevel(6, 5);
    expect(result).toBeFalsy();
  });
});