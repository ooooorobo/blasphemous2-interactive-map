import { component$ } from '@builder.io/qwik';
import { ORIGINAL_TILE_SIZE } from '../../business/map/constants.ts';
import { getTileRange, getTileSize } from '../../business/map/calculator.ts';
import { generatePointListInRange } from '../../util/point.ts';
import { makeRect } from '../../util/rect.ts';
import { Point } from '../../type/Point.ts';
import { getColumnCount, getFileName, isValidPoint } from '../../business/map/tile.ts';

type Props = {
  level: number;
  screenLeftTop: Point;
  mapLeftTop: Point;
}

export const MapTileLayer = component$(({ level, screenLeftTop, mapLeftTop }: Props) => {
  const windowRect = makeRect(screenLeftTop, innerWidth, innerHeight);
  const tileSize = getTileSize(level);

  const { start, last } = getTileRange({ tileSize, mapLeftTop, windowRect, padding: 3 });
  const tilePoints = generatePointListInRange(start, last);

  return <div>
    {tilePoints.map(({ x, y }) =>
      isValidPoint(x, y, getColumnCount(level)) && <MapTile x={x} y={y} level={level} mapLeftTop={mapLeftTop} />,
    )}
  </div>;
});

const MapTile = component$(({ x, y, level, mapLeftTop }: { x: number, y: number; level: number, mapLeftTop: Point }) => (
  <div
    key={x + ',' + y}
    style={{
      userSelect: 'none',
      position: 'absolute',
      transform: `translate(${mapLeftTop.x + x * ORIGINAL_TILE_SIZE}px, ${mapLeftTop.y + y * ORIGINAL_TILE_SIZE}px)`,
      width: ORIGINAL_TILE_SIZE,
      height: ORIGINAL_TILE_SIZE,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${getFileName(x, y, level)}`,
    }}>
    {x}, {y}
  </div>
));