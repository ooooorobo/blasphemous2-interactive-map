import { MAX_ZOOM_LEVEL } from './constants.ts';

export const isValidLevel = (level: number, maxZoomLevel = MAX_ZOOM_LEVEL) => {
  return Number.isInteger(level) && level >= 0 && level <= maxZoomLevel;
};
