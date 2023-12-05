import './app.css';
import './map.css';
import { MapTileLayer } from '../components/layer/MapTileLayer.tsx';
import { DraggableLayerContainer } from '../components/layer/DraggableLayerContainer.tsx';
import { Point } from '../type/Point.ts';
import { ToolBoxContainer } from '../components/tools/ToolBoxContainer.tsx';
import { isValidLevel } from '../business/map/validator.ts';
import { getZoomScale } from '../business/map/calculator.ts';
import { MarkerList } from '../data/marker.ts';
import { convertLeftTopBy, convertPointToOtherLeftTop } from '../util/point.ts';
import { MarkerLayer } from '../components/layer/MarkerLayer.tsx';
import { level, mapLeftTop, screenLeftTop, setLevel, setMapLeftTop } from '../signals/signal.ts';
import { getPinchZoomHandlers } from '../util/pinch_zoom.ts';

const calculateMapLeftTopByOriginPoint = ({ screenLeftTop, mapLeftTop, originPoint, prevLevel, nextLevel }: {
  screenLeftTop: Point;
  mapLeftTop: Point;
  originPoint: Point;
  prevLevel: number;
  nextLevel: number;
}) => {
  const point = convertPointToOtherLeftTop(originPoint, screenLeftTop, mapLeftTop);
  const scaleRatio = getZoomScale(nextLevel) / getZoomScale(prevLevel);
  return convertLeftTopBy(mapLeftTop, point, scaleRatio);
};

const getLevelAfterZoom = (currentLevel: number, zoomType: ZoomType) => {
  const changedValue = zoomType === 'in' ? 1 : -1;
  return currentLevel + changedValue;
};

export type ZoomType = 'in' | 'out';


export const App = () => {
  const scale = getZoomScale(level());

  const onZoom = (zoomType: ZoomType, originPoint: Point) => {
    if (!isValidLevel(getLevelAfterZoom(level(), zoomType))) return;

    const changedValue = zoomType === 'in' ? 1 : -1;
    const { x, y } = calculateMapLeftTopByOriginPoint({
      screenLeftTop: screenLeftTop(),
      mapLeftTop: mapLeftTop(),
      originPoint,
      nextLevel: level() + changedValue,
      prevLevel: level(),
    });
    setMapLeftTop({ x, y });
    setLevel(level => level + changedValue);
  };

  const { handlePointerMove, handlePointerUp } = getPinchZoomHandlers(onZoom);

  const onWheel = ({ deltaY, clientX, clientY }: WheelEvent) => {
    const zoomType = deltaY > 0 ? 'in' : 'out';
    if (!isValidLevel(getLevelAfterZoom(level(), zoomType))) return;

    onZoom(zoomType, { x: clientX, y: clientY });
  };

  const onClick = ({ clientX, clientY }: MouseEvent) => {
    const clickedPoint = convertPointToOtherLeftTop({ x: clientX, y: clientY }, screenLeftTop(), mapLeftTop());
    const flooredPoint = { x: Math.floor(clickedPoint.x), y: Math.floor(clickedPoint.y) };
    console.log(flooredPoint);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        id={'map'}
        onWheel={onWheel}
        onClick={onClick}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <DraggableLayerContainer>
          <MapTileLayer />
          <MarkerLayer markerList={MarkerList} scale={scale} />
        </DraggableLayerContainer>
      </div>
      <ToolBoxContainer
        onZoom={(zoomType: ZoomType) => onZoom(zoomType, {
          x: screenLeftTop().x + innerWidth / 2,
          y: screenLeftTop().y + innerHeight / 2,
        })}
      />
    </div>
  );
};
