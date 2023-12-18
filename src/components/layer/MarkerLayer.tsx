import { Marker } from '../../data/marker.ts';
import { MARKED_MARKER_LIST_STORAGE_KEY } from '../../constants/localStorageKey.ts';
import { MarkerView } from '../MarkerView.tsx';

type Props = {
  markerList: Marker[];
  scale: number;
}

export const MarkerLayer = (props: Props) => {
  let markedMarkerList = JSON.parse(localStorage.getItem(MARKED_MARKER_LIST_STORAGE_KEY) ?? '[]') as Array<number>;

  const onClickMarker = (id: number) => {
    markedMarkerList = markedMarkerList.includes(id) ? markedMarkerList.filter(x => x !== id) : [...markedMarkerList, id];
    localStorage.setItem(MARKED_MARKER_LIST_STORAGE_KEY, JSON.stringify(markedMarkerList));
  };

  return (
    <div class={'marker_layer'}>
      {props.markerList.map((data) =>
        <MarkerView
          data={data}
          scale={props.scale}
          initialMarked={markedMarkerList.includes(data.id)}
          onClickMarker={onClickMarker}
        />)}
    </div>
  );
};