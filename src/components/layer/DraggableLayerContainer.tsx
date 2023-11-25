import { component$, Slot } from '@builder.io/qwik';
import { getDraggableLayerPointHandlers } from '../../util/mouse_drag.ts';
import { Point } from '../../type/Point.ts';

type Props = {
  level: number;
  screenLeftTop: Point;
}

export const DraggableLayerContainer = component$(({ screenLeftTop }: Props) => {
  const { onMouseDown, onMouseMove } = getDraggableLayerPointHandlers((point) => {
    screenLeftTop.x = point.x;
    screenLeftTop.y = point.y;
  });

  window.addEventListener('pointerdown', (e) => {
    onMouseDown(screenLeftTop, e.clientX, e.clientY);
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
      transform: `translate(${-1 * screenLeftTop.x}px, ${-1 * screenLeftTop.y}px)`,
    }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        // transform: `scale(${scale})`,
        transition: 'transform 2.5s',
      }}>
      <Slot />
    </div>
  </div>;
});