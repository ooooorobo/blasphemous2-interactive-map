import { MAX_ZOOM_LEVEL } from './constants.ts';

export const isValidLevel = (level: number) => {
  return Number.isInteger(level) && level >= 0 && level <= MAX_ZOOM_LEVEL;
};
