import { component$, useSignal } from '@builder.io/qwik';
import './app.css';
import { getTileRange, getTileSize, getZoomScale } from '../business/map/calculator.ts';
import { generatePointListInRange } from '../util/point.ts';
import { ORIGINAL_TILE_SIZE } from '../business/map/constants.ts';
import { isValidLevel } from '../business/map/validator.ts';
import { Point } from '../type/Point.ts';
import { makeRect } from '../util/rect.ts';

export const App = component$(() => {
  const level = useSignal(5);

  const tileSize = getTileSize(level.value);
  const scale = getZoomScale(level.value);

  const left = useSignal(0);
  const top = useSignal(0);
  const originPoint = useSignal<Point>({ x: 0, y: 0 });

  const windowRect = makeRect({ x: left.value, y: top.value }, innerWidth, innerHeight);
  const { start, last } = getTileRange(tileSize, windowRect);
  const tilePoints = generatePointListInRange(start, last);

  const mouseMoveHandler = (e: MouseEvent) => {
    left.value = originPoint.value.x - e.clientX;
    top.value = originPoint.value.y - e.clientY;
  };

  window.addEventListener('mousedown', (e) => {
    originPoint.value = { x: left.value + e.clientX, y: top.value + e.clientY };
    window.addEventListener('mousemove', mouseMoveHandler);
  });

  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', mouseMoveHandler);
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
            transform: `translate(${-1 * left.value}px, ${-1 * top.value}px)`,
            scale: scale,
            // transition: 'scale 0.5s',
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
