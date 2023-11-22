import { component$ } from '@builder.io/qwik';
import { ORIGINAL_TILE_SIZE } from '../../business/map/constants.ts';
import { getTileRange, getTileSize } from '../../business/map/calculator.ts';
import { generatePointListInRange } from '../../util/point.ts';
import { makeRect } from '../../util/rect.ts';
import { Point } from '../../type/Point.ts';

type Props = {
  level: number;
  leftTop: Point;
}

export const MapTileLayer = component$(({ level, leftTop }: Props) => {
  const windowRect = makeRect(leftTop, innerWidth, innerHeight);
  const tileSize = getTileSize(level);

  const { start, last } = getTileRange(tileSize, windowRect, 5);
  const tilePoints = generatePointListInRange(start, last);

  return <div>
    {tilePoints.map(({ x, y }) =>
      <MapTile x={x} y={y} />,
    )}
  </div>;
});

const MapTile = component$(({ x, y }: { x: number, y: number }) => (
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
  </div>
));