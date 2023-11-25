import { $, component$, QwikMouseEvent, QwikWheelEvent, useSignal, useStore } from '@builder.io/qwik';
import './app.css';
import './map.css';
import { MapTileLayer } from '../components/layer/MapTileLayer.tsx';
import { DraggableLayerContainer } from '../components/layer/DraggableLayerContainer.tsx';
import { Point } from '../type/Point.ts';
import { ToolBoxContainer } from '../components/tools/ToolBoxContainer.tsx';
import { MAX_ZOOM_LEVEL, ORIGINAL_MAP_HEIGHT, ORIGINAL_MAP_WIDTH } from '../business/map/constants.ts';
import { isValidLevel } from '../business/map/validator.ts';
import { getZoomScale } from '../business/map/calculator.ts';
import { MarkerList } from '../data/marker.ts';
import { convertLeftTopBy, convertPointToOtherLeftTop } from '../util/point.ts';
import { MarkerLayer } from '../components/layer/MarkerLayer.tsx';

export const App = component$(() => {
  const level = useSignal(MAX_ZOOM_LEVEL);
  const scale = getZoomScale(level.value);

  const screenLeftTop = useStore<Point>({ x: 0, y: 0 });
  const mapLeftTop = useStore<Point>({ x: -(ORIGINAL_MAP_WIDTH - innerWidth) / 2, y: -(ORIGINAL_MAP_HEIGHT - innerHeight) / 2 });

  const onWheel = $(({ deltaY, clientX, clientY }: QwikWheelEvent) => {
    const changedLevel = level.value + 1 * (deltaY > 0 ? 1 : -1);
    if (!isValidLevel(changedLevel)) return;

    const point = convertPointToOtherLeftTop({ x: clientX, y: clientY }, screenLeftTop, mapLeftTop);
    const scaleRatio = getZoomScale(changedLevel) / getZoomScale(level.value);
    const newMapLeftTop = convertLeftTopBy(mapLeftTop, point, scaleRatio);
    mapLeftTop.x = newMapLeftTop.x;
    mapLeftTop.y = newMapLeftTop.y;
    level.value = changedLevel;
  });

  const onClick = $(({ clientX, clientY }: QwikMouseEvent) => {
    const clickedPoint = convertPointToOtherLeftTop({ x: clientX, y: clientY }, screenLeftTop, mapLeftTop);
    const flooredPoint = { x: Math.floor(clickedPoint.x), y: Math.floor(clickedPoint.y) };
    console.log(flooredPoint);
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id={'map'} onWheel$={onWheel} onClick$={onClick}>
        <DraggableLayerContainer screenLeftTop={screenLeftTop} level={level.value}>
          <MapTileLayer screenLeftTop={screenLeftTop} mapLeftTop={mapLeftTop} level={level.value} />
          <MarkerLayer markerList={MarkerList} mapLeftTop={mapLeftTop} scale={scale} />
        </DraggableLayerContainer>
      </div>
      <ToolBoxContainer
        level={level}
        screenLeftTop={screenLeftTop}
      />
    </div>
  );
});
