import { Point } from '../type/Point.ts';
import { createStore } from 'solid-js/store';

export const getDraggableLayerPointHandlers = (onNewPoint: (newPoint: Point) => void) => {
  let originPoint: Point;
  let clientOriginPoint: Point;

  const [evCache, setEvCache] = createStore(new Set<number>());

  const onPointerDown = ({ pointerId, clientX, clientY }: PointerEvent, currentOriginPoint: Point) => {
    setEvCache(prev => {
      prev.add(pointerId);
      return prev;
    });
    originPoint = Object.assign({}, currentOriginPoint);
    clientOriginPoint = { x: clientX, y: clientY };
  };

  const onPointerMove = ({ clientX, clientY }: PointerEvent) => {
    if (evCache.size !== 1) return;

    const xx = clientOriginPoint.x - clientX;
    const yy = clientOriginPoint.y - clientY;
    const newPoint = { x: originPoint.x + xx, y: originPoint.y + yy };
    onNewPoint(newPoint);
  };

  const onPointerUp = ({ pointerId }: PointerEvent) => {
    setEvCache(prev => {
      prev.delete(pointerId);
      return prev;
    });
  };

  return { onPointerDown, onPointerMove, onPointerUp };
};


