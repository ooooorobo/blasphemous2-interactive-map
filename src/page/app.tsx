import { component$, useSignal, useStore } from '@builder.io/qwik';
import './app.css';
import { MapTileLayer } from '../components/layer/MapTileLayer.tsx';
import { DraggableLayerContainer } from '../components/layer/DraggableLayerContainer.tsx';
import { Point } from '../type/Point.ts';
import { ToolBoxContainer } from '../components/tools/ToolBoxContainer.tsx';
import { MAX_ZOOM_LEVEL } from '../business/map/constants.ts';
import { isValidLevel } from '../business/map/validator.ts';

export const App = component$(() => {
  const level = useSignal(MAX_ZOOM_LEVEL);

  const screenLeftTop = useStore<Point>({ x: 0, y: 0 });

  const leftTop = useStore<Point>({ x: 0, y: 0 });

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
        </DraggableLayerContainer>
      </div>
      <ToolBoxContainer level={level} screenLeftTop={screenLeftTop} />
    </div>
  );
});
