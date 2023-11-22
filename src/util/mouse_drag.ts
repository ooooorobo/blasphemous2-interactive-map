import { Point } from '../type/Point.ts';

export const getDraggableLayerPointHandlers = (onNewPoint: (newPoint: Point) => void) => {
  let originPoint: Point;
  let clientOriginPoint: Point;

  const onMouseDown = (currentOriginPoint: Point, clientX: number, clientY: number) => {
    originPoint = Object.assign({}, currentOriginPoint);
    clientOriginPoint = { x: clientX, y: clientY };
  };

  const onMouseMove = ({ clientX, clientY }: { clientX: number, clientY: number }) => {
    const xx = clientOriginPoint.x - clientX;
    const yy = clientOriginPoint.y - clientY;
    const newPoint = { x: originPoint.x + xx, y: originPoint.y + yy };
    onNewPoint(newPoint);
  };

  return { onMouseDown, onMouseMove };
};


