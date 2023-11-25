import { $, component$, QwikWheelEvent, useSignal, useStore } from '@builder.io/qwik';
import './app.css';
import { MapTileLayer } from '../components/layer/MapTileLayer.tsx';
import { DraggableLayerContainer } from '../components/layer/DraggableLayerContainer.tsx';
import { Point } from '../type/Point.ts';
import { ToolBoxContainer } from '../components/tools/ToolBoxContainer.tsx';
import { MAX_ZOOM_LEVEL, ORIGINAL_MAP_HEIGHT, ORIGINAL_MAP_WIDTH } from '../business/map/constants.ts';
import { isValidLevel } from '../business/map/validator.ts';
import { convert, getZoomScale } from '../business/map/calculator.ts';
import { MarkerList } from '../data/marker.ts';

export const App = component$(() => {
  const level = useSignal(MAX_ZOOM_LEVEL);
  const scale = getZoomScale(level.value);

  const screenLeftTop = useStore<Point>({ x: 0, y: 0 });
  const mapLeftTop = useStore<Point>({ x: -(ORIGINAL_MAP_WIDTH - innerWidth) / 2, y: -(ORIGINAL_MAP_HEIGHT - innerHeight) / 2 });
  const markerList = useStore<Point[]>([]);

  const setLevel = $((action: 'ZOOM_IN' | 'ZOOM_OUT', point: Point) => {
    const changedLevel = level.value + 1 * (action === 'ZOOM_IN' ? -1 : 1);
    if (!isValidLevel(changedLevel)) return;

    const scaleRatio = getZoomScale(changedLevel) / getZoomScale(level.value);
    const newMapLeftTop = { x: mapLeftTop.x - point.x * (scaleRatio - 1), y: mapLeftTop.y - point.y * (scaleRatio - 1) };
    mapLeftTop.x = newMapLeftTop.x;
    mapLeftTop.y = newMapLeftTop.y;

    level.value = changedLevel;
  });

  const onWheel = $(({ deltaY, clientX, clientY }: QwikWheelEvent) => {
    const point = convert({ x: clientX, y: clientY }, screenLeftTop, mapLeftTop);
    setLevel(deltaY > 0 ? 'ZOOM_OUT' : 'ZOOM_IN', point);
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{
        position: 'relative',
        width: '100dvw',
        height: '100dvh',
        overflow: 'hidden',
        touchAction: 'none',
      }} onWheel$={onWheel}>
        <DraggableLayerContainer screenLeftTop={screenLeftTop} level={level.value}>
          <MapTileLayer screenLeftTop={screenLeftTop} mapLeftTop={mapLeftTop} level={level.value} />
          <div>
            {markerList.map(point => (
              <div
                style={{ position: 'absolute', transform: `translate(${mapLeftTop.x + point.x}px, ${mapLeftTop.y + point.y}px)`, fontSize: '24px' }}>
                ({point.x}, {point.y})
              </div>
            ))}
            {MarkerList.map(({ position }) => (
              <div
                style={{
                  position: 'absolute',
                  transform: `translate(${mapLeftTop.x + position.x * scale - 12}px, ${mapLeftTop.y + position.y * scale - 12}px)`,
                  width: '24px',
                  height: '24px',
                  borderRadius: '999px',
                  backgroundColor: 'white',
                }}
                onClick$={() => console.log(position, scale)}
              />
            ))}
          </div>
        </DraggableLayerContainer>
      </div>
      <ToolBoxContainer
        level={level}
        screenLeftTop={screenLeftTop}
        mapLeftTop={mapLeftTop}
        onClickPoint={$((point: Point) => {
          markerList.push(point);
        })} />
    </div>
  );
});
