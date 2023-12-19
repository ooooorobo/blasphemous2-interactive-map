import { createSignal } from 'solid-js';
import { level, mapLeftTop } from '../signals/signal.ts';
import { DefaultMarkerImageMap, Marker } from '../data/marker.ts';
import { getZoomScale } from '../business/map/calculator.ts';

type Props = {
  data: Marker;
  initialMarked: boolean;
  onClickMarker: (id: number) => void;
}

export const MarkerView = ({ data, initialMarked, onClickMarker }: Props) => {
  const [marked, setMarked] = createSignal(initialMarked);
  const imageUrl = DefaultMarkerImageMap[data.type];
  return (
    <div
      class={`marker ${marked() ? 'marked' : ''}`}
      onClick={() => {
        setMarked(prev => !prev);
        onClickMarker(data.id);
      }}
      style={{
        transform: `translate(${mapLeftTop().x + data.position.x * getZoomScale(level()) - 12}px, ${mapLeftTop().y + data.position.y * getZoomScale(level()) - 12}px)`,
      }}
    >{imageUrl ? <img src={imageUrl} alt={data.type} width={'24px'} height={'24px'} /> : data.type}</div>
  );
};