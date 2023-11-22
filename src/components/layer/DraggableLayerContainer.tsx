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

  window.addEventListener('pointerdown', (e) => {
    onMouseDown(leftTop, e.clientX, e.clientY);
    window.addEventListener('pointermove', onMouseMove);
  });

  window.addEventListener('pointerup', () => {
    window.removeEventListener('pointermove', onMouseMove);
  });

  return <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      transform: `translate(${-1 * leftTop.x}px, ${-1 * leftTop.y}px)`,
    }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        transform: `scale(${scale})`,
        transition: 'transform 0.5s',
      }}>
      <Slot />
    </div>
  </div>;
});