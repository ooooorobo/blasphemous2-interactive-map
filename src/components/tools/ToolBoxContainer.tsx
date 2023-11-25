import { component$, Signal } from '@builder.io/qwik';
import { isValidLevel } from '../../business/map/validator.ts';
import { Point } from '../../type/Point.ts';
import { convert } from '../../business/map/calculator.ts';

type Props = {
  level: Signal<number>;
  screenLeftTop: Point;
  mapLeftTop: Point;
  onClickPoint: (clickedPoint: Point) => void;
}

export const ToolBoxContainer = component$(({ level, screenLeftTop, mapLeftTop, onClickPoint }: Props) => {
  window.addEventListener('click', ({ clientX, clientY }) => {
    const clickedPoint = convert({ x: clientX, y: clientY }, screenLeftTop, mapLeftTop);
    onClickPoint(clickedPoint);
  });

  return <div style={{ position: 'fixed', top: 0, left: 0, backgroundColor: 'white', color: 'black' }}>
    <strong>tools</strong>
    <div>
      <p>level</p>
      <button type={'button'} onClick$={() => level.value++} disabled={!isValidLevel(level.value + 1)}>-</button>
      <span>{level.value}</span>
      <button type={'button'} onClick$={() => level.value--} disabled={!isValidLevel(level.value - 1)}>+</button>
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