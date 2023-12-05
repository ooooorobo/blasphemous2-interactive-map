import { getDraggableLayerPointHandlers } from '../../util/mouse_drag.ts';
import { ParentProps } from 'solid-js';
import { screenLeftTop, setScreenLeftTop } from '../../signals/signal.ts';

type Props = ParentProps;

export const DraggableLayerContainer = ({ children }: Props) => {
  const { onPointerDown, onPointerMove, onPointerUp } = getDraggableLayerPointHandlers(setScreenLeftTop);

  return <div
    class={'layer_container'}
    onPointerDown={(e) => onPointerDown(e, screenLeftTop())}
    onPointerMove={onPointerMove}
    onPointerUp={onPointerUp}
    style={{ transform: `translate(${-1 * screenLeftTop().x}px, ${-1 * screenLeftTop().y}px)` }}>
    {children}
  </div>;
};