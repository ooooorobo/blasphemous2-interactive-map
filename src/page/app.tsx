import { component$, useSignal, useStore } from '@builder.io/qwik';
import './app.css';
import { MapTileLayer } from '../components/layer/MapTileLayer.tsx';
import { DraggableLayerContainer } from '../components/layer/DraggableLayerContainer.tsx';
import { Point } from '../type/Point.ts';
import { ToolBoxContainer } from '../components/tools/ToolBoxContainer.tsx';

export const App = component$(() => {
  const level = useSignal(5);

  const leftTop = useStore<Point>({ x: 0, y: 0 });

  return (
    <>
      <div style={{
        position: 'relative',
        width: '100dvw',
        height: '100dvh',
        overflow: 'hidden',
      }}>
        <DraggableLayerContainer leftTop={leftTop} level={level.value}>
          <MapTileLayer leftTop={leftTop} level={level.value} />
        </DraggableLayerContainer>
      </div>
      <ToolBoxContainer level={level} leftTop={leftTop} />
    </>
  );
});
