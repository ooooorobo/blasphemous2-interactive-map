import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import './app.css';
import { MapTileLayer } from '../components/layer/MapTileLayer.tsx';
import { DraggableLayerContainer } from '../components/layer/DraggableLayerContainer.tsx';
import { Point } from '../type/Point.ts';
import { ToolBoxContainer } from '../components/tools/ToolBoxContainer.tsx';
import { MAX_ZOOM_LEVEL } from '../business/map/constants.ts';
import { throttle } from 'lodash-es';
import { isValidLevel } from '../business/map/validator.ts';

export const App = component$(() => {
  const level = useSignal(MAX_ZOOM_LEVEL);

  const screenLeftTop = useStore<Point>({ x: 0, y: 0 });
  const markerList = useStore<Point[]>([]);

  const debouncedLevelHandler = throttle((action: 'ZOOM_IN' | 'ZOOM_OUT') => {
    const changedLevel = level.value + 1 * (action === 'ZOOM_IN' ? -1 : 1);
    if (isValidLevel(changedLevel)) level.value = changedLevel;
  }, 300, { leading: true });

  window.addEventListener('wheel', ({ deltaY }) => {
    debouncedLevelHandler(deltaY > 0 ? 'ZOOM_OUT' : 'ZOOM_IN');
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{
        position: 'relative',
        width: '100dvw',
        height: '100dvh',
        overflow: 'hidden',
        touchAction: 'none',
      }}>
        <DraggableLayerContainer screenLeftTop={screenLeftTop} level={level.value}>
          <MapTileLayer screenLeftTop={screenLeftTop} level={level.value} />
          <div>
            {markerList.map(point => (
              <div
                style={{ position: 'absolute', transform: `translate(${point.x}px, ${point.y}px)`, fontSize: '24px' }}>
                ({point.x}, {point.y})
              </div>
            ))}
          </div>
        </DraggableLayerContainer>
      </div>
      <ToolBoxContainer
        level={level}
        screenLeftTop={screenLeftTop}
        onClickPoint={$((point: Point) => {
          markerList.push(point);
        })} />
    </div>
  );
});
