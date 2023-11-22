import { component$, Signal } from '@builder.io/qwik';
import { isValidLevel } from '../../business/map/validator.ts';
import { Point } from '../../type/Point.ts';

type Props = {
  level: Signal<number>;
  leftTop: Point;
}

export const ToolBoxContainer = component$(({ level, leftTop }: Props) => {
  return <div style={{ position: 'fixed', top: 0, left: 0, backgroundColor: 'white', color: 'black' }}>
    <strong>tools</strong>
    <div>
      <p>level</p>
      <button type={'button'} onClick$={() => level.value--} disabled={!isValidLevel(level.value - 1)}>-</button>
      <span>{level.value}</span>
      <button type={'button'} onClick$={() => level.value++} disabled={!isValidLevel(level.value + 1)}>+</button>
    </div>
    <div>
      <p>reset position</p>
      <button type={'button'} onClick$={() => {
        leftTop.x = 0;
        leftTop.y = 0;
      }}>reset
      </button>
    </div>
  </div>;
});