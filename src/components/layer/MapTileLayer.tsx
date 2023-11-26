import { component$ } from '@builder.io/qwik';
import { ORIGINAL_TILE_SIZE } from '../../business/map/constants.ts';
import { getTileRange, getZoomScale } from '../../business/map/calculator.ts';
import { generatePointListInRange } from '../../util/point.ts';
import { makeRect } from '../../util/rect.ts';
import { Point } from '../../type/Point.ts';
import { getFileName, isValidPoint } from '../../business/map/tile.ts';

type Props = {
  level: number;
  screenLeftTop: Point;
  mapLeftTop: Point;
}

export const MapTileLayer = component$(({ level, screenLeftTop, mapLeftTop }: Props) => {
  const windowRect = makeRect(screenLeftTop, innerWidth, innerHeight);

  const { start, last } = getTileRange({ mapLeftTop, windowRect, padding: 3 });
  const tilePoints = generatePointListInRange(start, last);

  return <div class={'tile_layer'}>
    {tilePoints.map(({ x, y }) =>
      isValidPoint(x, y, getZoomScale(level)) && <MapTile x={x} y={y} level={level} mapLeftTop={mapLeftTop} />,
    )}
  </div>;
});

const MapTile = component$(({ x, y, level, mapLeftTop }: {
  x: number,
  y: number;
  level: number,
  mapLeftTop: Point
}) => (
  <div
    key={x + ',' + y}
    class={'tile'}
    style={{
      transform: `translate(${mapLeftTop.x + x * ORIGINAL_TILE_SIZE}px, ${mapLeftTop.y + y * ORIGINAL_TILE_SIZE}px)`,
      backgroundImage: `url(${getFileName(x, y, level)}`,
    }}>
    {x}, {y}
  </div>
));