import { Point } from '../type/Point.ts';

type MarkerType =
  'SISTER'
  | 'ROSARY'
  | 'WEAPON'
  | 'CHERUB'
  | 'QUEST_ITEM'
  | 'TRIBUTE'
  | 'BEAD'
  | 'PRAYER'
  | 'CHALICE'
  | 'WAXSEED'
  | 'NPC'
  | 'ABILITY'
  | 'BOSS'
  | 'RECEPTACLE'
  | 'HIDDEN_SYMBOL'

export type Marker = {
  // id: string;
  type: MarkerType;
  position: Point;
}

export const MarkerList: Marker[] = [
  { type: 'SISTER', position: { x: 283, y: 951 } },
  { type: 'SISTER', position: { x: 265, y: 1065 } },
  { type: 'SISTER', position: { x: 382, y: 1347 } },
  { type: 'SISTER', position: { x: 641, y: 1158 } },
  { type: 'SISTER', position: { x: 1415, y: 1626 } },
  { type: 'SISTER', position: { x: 1408, y: 1187 } },
  { type: 'SISTER', position: { x: 1681, y: 1155 } },
];