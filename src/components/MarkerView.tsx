import { createSignal } from 'solid-js';
import { mapLeftTop } from '../signals/signal.ts';
import { Marker } from '../data/marker.ts';

type Props = {
  data: Marker;
  scale: number;
  initialMarked: boolean;
  onClickMarker: (id: number) => void;
}

export const MarkerView = ({ data, scale, initialMarked, onClickMarker }: Props) => {
  const [marked, setMarked] = createSignal(initialMarked);
  return (
    <div
      class={`marker ${marked() ? 'marked' : ''}`}
      onClick={() => {
        setMarked(prev => !prev);
        onClickMarker(data.id);
      }}
      style={{
        transform: `translate(${mapLeftTop().x + data.position.x * scale - 12}px, ${mapLeftTop().y + data.position.y * scale - 12}px)`,
      }}
    >{data.type}</div>
  );
};