import { component$ } from '@builder.io/qwik';
import { Marker } from '../../data/marker.ts';
import { Point } from '../../type/Point.ts';

type Props = {
  markerList: Marker[];
  mapLeftTop: Point;
  scale: number;
}

export const MarkerLayer = component$(({ markerList, mapLeftTop, scale }: Props) => {
  return (
    <div class={'marker_layer'}>
      {markerList.map(({ position, type }) => (
        <div
          class={'marker'}
          style={{
            transform: `translate(${mapLeftTop.x + position.x * scale - 12}px, ${mapLeftTop.y + position.y * scale - 12}px)`,
          }}
        >{type}</div>
      ))}
    </div>
  );
});