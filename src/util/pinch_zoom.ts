import { Point } from '../type/Point.ts';
import { ZoomType } from '../page/app.tsx';
import { createSignal } from 'solid-js';

export const getPinchZoomHandlers = ((onZoom: (zoomType: ZoomType, centerPoint: Point) => void) => {
  const [prevDiff, setPrevDiff] = createSignal(-1);

  const handlePointerMove = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      const [first, second] = e.touches;
      const currentDiff = Math.abs(first.clientX - second.clientX) ** 2 + Math.abs(first.clientY - second.clientY) ** 2;

      if (prevDiff() > 0) {
        const centerPoint: Point = {
          x: (first.clientX + second.clientX) / 2,
          y: (first.clientY + second.clientY) / 2,
        };
        if (currentDiff > prevDiff()) {
          onZoom('out', centerPoint);
        } else {
          onZoom('in', centerPoint);
        }
      }

      setPrevDiff(currentDiff);
    }
  };

  const handlePointerUp = (e: TouchEvent) => {
    if (e.touches.length < 2) {
      setPrevDiff(-1);
    }
  };

  return { handlePointerMove, handlePointerUp };
});