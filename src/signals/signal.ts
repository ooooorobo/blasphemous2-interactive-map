import { createSignal } from 'solid-js';
import { MAX_ZOOM_LEVEL, ORIGINAL_MAP_HEIGHT, ORIGINAL_MAP_WIDTH } from '../business/map/constants.ts';
import { Point } from '../type/Point.ts';

const [level, setLevel] = createSignal(MAX_ZOOM_LEVEL);
const [screenLeftTop, setScreenLeftTop] = createSignal<Point>({ x: 0, y: 0 });
const [mapLeftTop, setMapLeftTop] = createSignal<Point>({
  x: -(ORIGINAL_MAP_WIDTH - innerWidth) / 2,
  y: -(ORIGINAL_MAP_HEIGHT - innerHeight) / 2,
});

export {
  level, setLevel, screenLeftTop, setScreenLeftTop, mapLeftTop, setMapLeftTop,
};
