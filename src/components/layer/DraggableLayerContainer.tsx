import { component$, Slot } from '@builder.io/qwik';
import { getDraggableLayerPointHandlers } from '../../util/mouse_drag.ts';
import { Point } from '../../type/Point.ts';
import { getZoomScale } from '../../business/map/calculator.ts';

type Props = {
  level: number;
  leftTop: Point;
}

export const DraggableLayerContainer = component$(({ level, leftTop }: Props) => {
  const scale = getZoomScale(level);

  const { onMouseDown, onMouseMove } = getDraggableLayerPointHandlers((point) => {
    leftTop.x = point.x;
    leftTop.y = point.y;
  });

  window.addEventListener('mousedown', (e) => {
    onMouseDown(leftTop, e.clientX, e.clientY);
    window.addEventListener('mousemove', onMouseMove);
  });

  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', onMouseMove);
  });

  return <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      transform: `translate(${-1 * leftTop.x}px, ${-1 * leftTop.y}px) scale(${scale})`,
    }}>
    <Slot />
  </div>;
});