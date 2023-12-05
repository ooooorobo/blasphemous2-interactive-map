import { isValidLevel } from '../../business/map/validator.ts';
import { ZoomType } from '../../page/app.tsx';
import { level, setScreenLeftTop } from '../../signals/signal.ts';

type Props = {
  onZoom: (zoomType: ZoomType) => void;
}

export const ToolBoxContainer = (props: Props) => {
  return <div style={{ position: 'fixed', top: 0, left: 0, 'background-color': 'white', color: 'black' }}>
    <strong>tools</strong>
    <div>
      <p>level</p>
      <button type={'button'} onClick={() => props.onZoom('in')} disabled={!isValidLevel(level() + 1)}>-</button>
      <span>{level()}</span>
      <button type={'button'} onClick={() => props.onZoom('out')} disabled={!isValidLevel(level() - 1)}>+</button>
    </div>
    <div>
      <p>reset position</p>
      <button type={'button'} onClick={() => setScreenLeftTop({ x: 0, y: 0 })}>
        reset
      </button>
    </div>
  </div>;
};