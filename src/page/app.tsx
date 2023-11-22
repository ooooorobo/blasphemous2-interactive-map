import { component$, useSignal } from '@builder.io/qwik';
import './app.css';
import { getTileRange, getTileSize, getZoomScale } from '../business/map/calculator.ts';
import { generatePointListInRange } from '../util/point.ts';
import { ORIGINAL_TILE_SIZE } from '../business/map/constants.ts';
import { isValidLevel } from '../business/map/validator.ts';
import { makeRect } from '../util/rect.ts';
import { getDraggableLayerPointHandlers } from '../util/mouse_drag.ts';

export const App = component$(() => {
  const level = useSignal(5);

  const tileSize = getTileSize(level.value);
  const scale = getZoomScale(level.value);

  const left = useSignal(0);
  const top = useSignal(0);

  const windowRect = makeRect({ x: left.value, y: top.value }, innerWidth, innerHeight);
  const { start, last } = getTileRange(tileSize, windowRect, 5);
  const tilePoints = generatePointListInRange(start, last);

  const { onMouseDown, onMouseMove } = getDraggableLayerPointHandlers((point) => {
    left.value = point.x;
    top.value = point.y;
  });

  window.addEventListener('mousedown', (e) => {
    onMouseDown({ x: left.value, y: top.value }, e.clientX, e.clientY);
    window.addEventListener('mousemove', onMouseMove);
  });

  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', onMouseMove);
  });

  return (
    <>

      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(${-1 * left.value}px, ${-1 * top.value}px) scale(${scale})`,
          }}>
          {tilePoints.map(({ x, y }) =>
            <div
              key={x + ',' + y}
              style={{
                position: 'absolute',
                transform: `translate(${x * ORIGINAL_TILE_SIZE}px, ${y * ORIGINAL_TILE_SIZE}px)`,
                border: '1px solid white',
                width: ORIGINAL_TILE_SIZE,
                height: ORIGINAL_TILE_SIZE,
              }}>
              {x}, {y}
            </div>,
          )}
        </div>
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0, backgroundColor: 'white', color: 'black' }}>
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
            top.value = 0;
            left.value = 0;
          }}>reset
          </button>
        </div>
      </div>
    </>
  );
});
