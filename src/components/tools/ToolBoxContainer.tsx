import { component$, Signal } from '@builder.io/qwik';
import { isValidLevel } from '../../business/map/validator.ts';
import { Point } from '../../type/Point.ts';
import { ZoomType } from '../../page/app.tsx';

type Props = {
  level: Signal<number>;
  screenLeftTop: Point;
  onZoom: (zoomType: ZoomType) => void;
}

export const ToolBoxContainer = component$(({ level, screenLeftTop, onZoom }: Props) => {
  return <div style={{ position: 'fixed', top: 0, left: 0, backgroundColor: 'white', color: 'black' }}>
    <strong>tools</strong>
    <div>
      <p>level</p>
      <button type={'button'} onClick$={() => onZoom('in')} disabled={!isValidLevel(level.value + 1)}>-</button>
      <span>{level.value}</span>
      <button type={'button'} onClick$={() => onZoom('out')} disabled={!isValidLevel(level.value - 1)}>+</button>
    </div>
    <div>
      <p>reset position</p>
      <button type={'button'} onClick$={() => {
        screenLeftTop.x = 0;
        screenLeftTop.y = 0;
      }}>reset
      </button>
    </div>
  </div>;
});