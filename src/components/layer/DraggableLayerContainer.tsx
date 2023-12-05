import { getDraggableLayerPointHandlers } from '../../util/mouse_drag.ts';
import { ParentProps } from 'solid-js';
import { screenLeftTop, setScreenLeftTop } from '../../signals/signal.ts';

type Props = ParentProps;

export const DraggableLayerContainer = ({ children }: Props) => {
  const { onMouseDown, onMouseMove } = getDraggableLayerPointHandlers(setScreenLeftTop);

  window.addEventListener('pointerdown', (e) => {
    onMouseDown(screenLeftTop(), e.clientX, e.clientY);
    window.addEventListener('pointermove', onMouseMove);
  });

  window.addEventListener('pointerup', () => {
    window.removeEventListener('pointermove', onMouseMove);
  });

  return <div
    class={'layer_container'}
    style={{ transform: `translate(${-1 * screenLeftTop().x}px, ${-1 * screenLeftTop().y}px)` }}>
    {children}
  </div>;
};