import { component$, useSignal } from '@builder.io/qwik';
import './app.css';
import { calculateWindowRect } from '../business/window/calculator.ts';
import { getTileRange, getTileSize, getZoomScale } from '../business/map/calculator.ts';
import { generatePointListInRange } from '../util/point.ts';
import { ORIGINAL_TILE_SIZE } from '../business/map/constants.ts';
import { isValidLevel } from '../business/map/validator.ts';

export const App = component$(() => {
  const level = useSignal(5);

  const tileSize = getTileSize(level.value);
  const scale = getZoomScale(level.value);
  const leftTop = { x: 300, y: 600 };

  const windowRect = calculateWindowRect(leftTop, innerWidth, innerHeight);
  const { start, last } = getTileRange(tileSize, windowRect);
  const tilePoints = generatePointListInRange(start, last);

  return (
    <>

      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: `translate(-${leftTop.x}px, -${leftTop.y}px) scale(${scale})`,
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
      </div>
    </>
  );
});
