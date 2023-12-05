import { ORIGINAL_TILE_SIZE } from '../../business/map/constants.ts';
import { getTileRange, getZoomScale } from '../../business/map/calculator.ts';
import { generatePointListInRange } from '../../util/point.ts';
import { makeRect } from '../../util/rect.ts';
import { Point } from '../../type/Point.ts';
import { getFileName, isValidPoint } from '../../business/map/tile.ts';
import { level, mapLeftTop, screenLeftTop } from '../../signals/signal.ts';


export const MapTileLayer = () => {
  const getTilePoints = () => {
    const windowRect = makeRect(screenLeftTop(), innerWidth, innerHeight);

    const { start, last } = getTileRange({
      mapLeftTop: mapLeftTop(),
      windowRect,
      padding: 3,
    });
    
    return generatePointListInRange(start, last);
  };

  return <div class={'tile_layer'}>
    {getTilePoints().map(({ x, y }) =>
      isValidPoint(x, y, getZoomScale(level())) && <MapTile x={x} y={y} level={level()} mapLeftTop={mapLeftTop()} />,
    )}
  </div>;
};

const MapTile = (props: {
  x: number,
  y: number;
  level: number,
  mapLeftTop: Point
}) => (
  <div
    class={'tile'}
    style={{
      transform: `translate(${props.mapLeftTop.x + props.x * ORIGINAL_TILE_SIZE}px, ${props.mapLeftTop.y + props.y * ORIGINAL_TILE_SIZE}px)`,
      'background-image': `url(${getFileName(props.x, props.y, props.level)}`,
    }}>
    {props.x}, {props.y}
  </div>
);