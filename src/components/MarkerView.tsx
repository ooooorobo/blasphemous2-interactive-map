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
  const zoomScale = () => getZoomScale(level());
  const markerSize = () => 36 * getZoomScale(level());
  const xPos = () => mapLeftTop().x + data.position.x * zoomScale() - markerSize() / 2,
    yPos = () => mapLeftTop().y + data.position.y * zoomScale() - markerSize() / 2;
  return (
    <div
      class={`marker ${marked() ? 'marked' : ''}`}
      onClick={() => {
        setMarked(prev => !prev);
        onClickMarker(data.id);
      }}
      style={{ transform: `translate(${xPos()}px, ${yPos()}px)` }}
    >
      {imageUrl ?
        <img
          draggable={'false'}
          src={imageUrl}
          alt={data.type}
          width={markerSize()}
          height={markerSize()}
        /> : data.type
      }
    </div>
  );
};