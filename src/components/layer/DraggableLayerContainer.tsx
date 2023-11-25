import { component$, Slot } from '@builder.io/qwik';
import { getDraggableLayerPointHandlers } from '../../util/mouse_drag.ts';
import { Point } from '../../type/Point.ts';
import { localStorageKey } from '../../page/app.tsx';

type Props = {
  level: number;
  screenLeftTop: Point;
}

export const DraggableLayerContainer = component$(({ screenLeftTop }: Props) => {
  const { onMouseDown, onMouseMove } = getDraggableLayerPointHandlers((point) => {
    localStorage.setItem(localStorageKey, JSON.stringify(screenLeftTop));
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
    class={'layer_container'}
    style={{ transform: `translate(${-1 * screenLeftTop.x}px, ${-1 * screenLeftTop.y}px)` }}>
    <Slot />
  </div>;
});