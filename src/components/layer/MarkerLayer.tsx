import { Marker } from '../../data/marker.ts';
import { mapLeftTop } from '../../signals/signal.ts';

type Props = {
  markerList: Marker[];
  scale: number;
}

export const MarkerLayer = (props: Props) => {
  return (
    <div class={'marker_layer'}>
      {props.markerList.map(({ position, type }) => (
        <div
          class={'marker'}
          style={{
            transform: `translate(${mapLeftTop().x + position.x * props.scale - 12}px, ${mapLeftTop().y + position.y * props.scale - 12}px)`,
          }}
        >{type}</div>
      ))}
    </div>
  );
};