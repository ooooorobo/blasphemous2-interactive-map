import { Point } from '../type/Point.ts';
import { IMAGE_BASE_URL } from '../constants/url.ts';

type MarkerType =
  | 'SISTER' // 자매
  | 'ROSARY' // 묵주 끈
  | 'WEAPON'
  | 'CHERUB' // 아기 천사
  | 'QUEST_ITEM'
  | 'TRIBUTE' // 동전
  | 'BEAD' // 묵주 알
  | 'PRAYER' // 기도문
  | 'CHALICE'
  | 'CHARIOT' // 마차
  | 'WAXSEED' // 밀랍 씨앗
  | 'NPC'
  | 'ABILITY'
  | 'BOSS'
  | 'RECEPTACLE' // 공병
  | 'HIDDEN_SYMBOL'
  | 'ALTARPIECE' // 조각상
  | 'MARTYRDOM' // 그거의 조각
  | 'TOOL'
  | 'FERVENT_KISS'
  | 'DAUGHTER'
  | 'CRYSTAL_SHARD';

export type Marker = {
  id: number;
  type: MarkerType;
  position: Point;
  detail?: MarkerDetail;
};

export type MarkerDetail = {
  name: string;
  description: string;
};

const MARKER_URL = IMAGE_BASE_URL + '/marker';
export const DefaultMarkerImageMap: Record<MarkerType, string> = {
  ABILITY: '',
  ALTARPIECE: MARKER_URL + '/altarpiece.png',
  BEAD: '',
  BOSS: '',
  CHALICE: MARKER_URL + '/chalice.png',
  CHARIOT: '',
  CHERUB: MARKER_URL + '/cherub.png',
  CRYSTAL_SHARD: MARKER_URL + '/crystal_shard.png',
  DAUGHTER: MARKER_URL + '/daughter.png',
  FERVENT_KISS: MARKER_URL + '/fervent_kiss.png',
  HIDDEN_SYMBOL: MARKER_URL + '/hidden_symbol.png',
  MARTYRDOM: MARKER_URL + '/martyrdom.png',
  NPC: '',
  PRAYER: '',
  QUEST_ITEM: '',
  RECEPTACLE: MARKER_URL + '/receptacle.png',
  ROSARY: MARKER_URL + '/rosary.png',
  SISTER: MARKER_URL + '/sister.png',
  TOOL: MARKER_URL + '/tool.png',
  TRIBUTE: MARKER_URL + '/tribute.png',
  WAXSEED: MARKER_URL + '/waxseed.png',
  WEAPON: '',
};

export const DefaultMarkerDetailMap: Record<MarkerType, MarkerDetail | undefined> = {
  ABILITY: undefined,
  ALTARPIECE: undefined,
  BEAD: undefined,
  BOSS: undefined,
  CHALICE: undefined,
  CHARIOT: undefined,
  CHERUB: undefined,
  CRYSTAL_SHARD: undefined,
  DAUGHTER: undefined,
  FERVENT_KISS: undefined,
  HIDDEN_SYMBOL: undefined,
  MARTYRDOM: undefined,
  NPC: undefined,
  PRAYER: undefined,
  QUEST_ITEM: undefined,
  RECEPTACLE: undefined,
  ROSARY: undefined,
  SISTER: undefined,
  TOOL: undefined,
  TRIBUTE: undefined,
  WAXSEED: undefined,
  WEAPON: undefined,
};

export const MarkerList: Marker[] = [
  {
    type: 'SISTER',
    position: {
      x: 283,
      y: 951,
    },
    id: 0,
  },
  {
    type: 'SISTER',
    position: {
      x: 265,
      y: 1065,
    },
    id: 1,
  },
  {
    type: 'SISTER',
    position: {
      x: 382,
      y: 1347,
    },
    id: 2,
  },
  {
    type: 'SISTER',
    position: {
      x: 641,
      y: 1158,
    },
    id: 3,
  },
  {
    type: 'SISTER',
    position: {
      x: 1415,
      y: 1626,
    },
    id: 4,
  },
  {
    type: 'SISTER',
    position: {
      x: 1408,
      y: 1187,
    },
    id: 5,
  },
  {
    type: 'SISTER',
    position: {
      x: 1681,
      y: 1155,
    },
    id: 6,
  },
  {
    type: 'SISTER',
    position: {
      x: 2127,
      y: 1363,
    },
    id: 7,
  },
  {
    type: 'SISTER',
    position: {
      x: 1794,
      y: 1130,
    },
    id: 8,
  },
  {
    type: 'WEAPON',
    position: {
      x: 238,
      y: 975,
    },
    id: 9,
  },
  {
    type: 'WEAPON',
    position: {
      x: 645,
      y: 1511,
    },
    id: 10,
  },
  {
    type: 'WEAPON',
    position: {
      x: 1263,
      y: 1929,
    },
    id: 11,
  },
  {
    type: 'WEAPON',
    position: {
      x: 2169,
      y: 1426,
    },
    id: 12,
  },
  {
    type: 'WEAPON',
    position: {
      x: 1736,
      y: 1148,
    },
    id: 13,
  },
  {
    type: 'WEAPON',
    position: {
      x: 2434,
      y: 1067,
    },
    id: 14,
  },
  {
    type: 'WEAPON',
    position: {
      x: 2479,
      y: 831,
    },
    id: 15,
  },
  {
    type: 'WEAPON',
    position: {
      x: 1177,
      y: 861,
    },
    id: 16,
  },
  {
    type: 'WEAPON',
    position: {
      x: 1294,
      y: 676,
    },
    id: 17,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 196,
      y: 1071,
    },
    id: 18,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 229,
      y: 1812,
    },
    id: 19,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 902,
      y: 1336,
    },
    id: 20,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 905,
      y: 1304,
    },
    id: 21,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 1470,
      y: 1277,
    },
    id: 22,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 1948,
      y: 1273,
    },
    id: 23,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 2002,
      y: 1425,
    },
    id: 24,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 2474,
      y: 924,
    },
    id: 25,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 407,
      y: 1126,
    },
    id: 26,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 725,
      y: 1095,
    },
    id: 27,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 936,
      y: 713,
    },
    id: 28,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 1322,
      y: 890,
    },
    id: 29,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 201,
      y: 1100,
    },
    id: 30,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1090,
      y: 1600,
    },
    id: 31,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1133,
      y: 1630,
    },
    id: 32,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1218,
      y: 1720,
    },
    id: 33,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1178,
      y: 1952,
    },
    id: 34,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 494,
      y: 1333,
    },
    id: 35,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 823,
      y: 1360,
    },
    id: 36,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1174,
      y: 1455,
    },
    id: 37,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1354,
      y: 1484,
    },
    id: 38,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1295,
      y: 1479,
    },
    id: 39,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1295,
      y: 1286,
    },
    id: 40,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1525,
      y: 1518,
    },
    id: 41,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1651,
      y: 1303,
    },
    id: 42,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1384,
      y: 1214,
    },
    id: 43,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1615,
      y: 1096,
    },
    id: 44,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1709,
      y: 1007,
    },
    id: 45,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 2037,
      y: 983,
    },
    id: 46,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 2271,
      y: 947,
    },
    id: 47,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1443,
      y: 832,
    },
    id: 48,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1620,
      y: 710,
    },
    id: 49,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 441,
      y: 1483,
    },
    id: 50,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 435,
      y: 1126,
    },
    id: 51,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 610,
      y: 1071,
    },
    id: 52,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 851,
      y: 949,
    },
    id: 53,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 792,
      y: 1129,
    },
    id: 54,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 938,
      y: 1126,
    },
    id: 55,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 951,
      y: 979,
    },
    id: 56,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 951,
      y: 929,
    },
    id: 57,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 953,
      y: 810,
    },
    id: 58,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 940,
      y: 742,
    },
    id: 59,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1106,
      y: 420,
    },
    id: 60,
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1237,
      y: 383,
    },
    id: 61,
  },
  {
    type: 'ROSARY',
    position: {
      x: 1317,
      y: 1486,
    },
    id: 62,
  },
  {
    type: 'ROSARY',
    position: {
      x: 303,
      y: 937,
    },
    id: 63,
  },
  {
    type: 'ROSARY',
    position: {
      x: 1262,
      y: 837,
    },
    id: 64,
  },
  {
    type: 'CHARIOT',
    position: {
      x: 1317,
      y: 1486,
    },
    id: 65,
  },
  {
    type: 'CHARIOT',
    position: {
      x: 1589,
      y: 1099,
    },
    id: 66,
  },
  {
    type: 'CHARIOT',
    position: {
      x: 1682,
      y: 1011,
    },
    id: 67,
  },
  {
    type: 'NPC',
    position: {
      x: 202,
      y: 1193,
    },
    id: 68,
  },
  {
    type: 'NPC',
    position: {
      x: 260,
      y: 1803,
    },
    id: 69,
  },
  {
    type: 'NPC',
    position: {
      x: 672,
      y: 1633,
    },
    id: 70,
  },
  {
    type: 'NPC',
    position: {
      x: 1152,
      y: 2019,
    },
    id: 71,
  },
  {
    type: 'NPC',
    position: {
      x: 319,
      y: 1329,
    },
    id: 72,
  },
  {
    type: 'NPC',
    position: {
      x: 1175,
      y: 1212,
    },
    id: 73,
  },
  {
    type: 'NPC',
    position: {
      x: 1268,
      y: 1308,
    },
    id: 74,
  },
  {
    type: 'NPC',
    position: {
      x: 1650,
      y: 1516,
    },
    id: 75,
  },
  {
    type: 'NPC',
    position: {
      x: 2064,
      y: 1218,
    },
    id: 76,
  },
  {
    type: 'NPC',
    position: {
      x: 2329,
      y: 980,
    },
    id: 77,
  },
  {
    type: 'NPC',
    position: {
      x: 1526,
      y: 654,
    },
    id: 78,
  },
  {
    type: 'NPC',
    position: {
      x: 1351,
      y: 744,
    },
    id: 79,
  },
  {
    type: 'NPC',
    position: {
      x: 553,
      y: 1156,
    },
    id: 80,
  },
  {
    type: 'NPC',
    position: {
      x: 939,
      y: 1038,
    },
    id: 81,
  },
  {
    type: 'NPC',
    position: {
      x: 1148,
      y: 654,
    },
    id: 82,
  },
  {
    type: 'ABILITY',
    position: {
      x: 202,
      y: 1220,
    },
    id: 83,
  },
  {
    type: 'ABILITY',
    position: {
      x: 1060,
      y: 2080,
    },
    id: 84,
  },
  {
    type: 'ABILITY',
    position: {
      x: 1295,
      y: 1569,
    },
    id: 85,
  },
  {
    type: 'ABILITY',
    position: {
      x: 2301,
      y: 946,
    },
    id: 86,
  },
  {
    type: 'BOSS',
    position: {
      x: 243,
      y: 1326,
    },
    id: 87,
  },
  {
    type: 'BOSS',
    position: {
      x: 511,
      y: 1633,
    },
    id: 88,
  },
  {
    type: 'BOSS',
    position: {
      x: 1116,
      y: 2017,
    },
    id: 89,
  },
  {
    type: 'BOSS',
    position: {
      x: 547,
      y: 1366,
    },
    id: 90,
  },
  {
    type: 'BOSS',
    position: {
      x: 1953,
      y: 1427,
    },
    id: 91,
  },
  {
    type: 'BOSS',
    position: {
      x: 2139,
      y: 831,
    },
    id: 92,
  },
  {
    type: 'BOSS',
    position: {
      x: 2272,
      y: 534,
    },
    id: 93,
  },
  {
    type: 'BOSS',
    position: {
      x: 1478,
      y: 655,
    },
    id: 94,
  },
  {
    type: 'BOSS',
    position: {
      x: 598,
      y: 1162,
    },
    id: 95,
  },
  {
    type: 'BOSS',
    position: {
      x: 1218,
      y: 120,
    },
    id: 96,
  },
  {
    type: 'BOSS',
    position: {
      x: 1184,
      y: 69,
    },
    id: 97,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 216,
      y: 1369,
    },
    id: 98,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2031,
      y: 1012,
    },
    id: 99,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2122,
      y: 952,
    },
    id: 100,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 461,
      y: 1042,
    },
    id: 101,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1293,
      y: 1690,
    },
    id: 102,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 349,
      y: 1331,
    },
    id: 103,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1063,
      y: 1278,
    },
    id: 104,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1172,
      y: 1290,
    },
    id: 105,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1246,
      y: 1547,
    },
    id: 106,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1251,
      y: 1310,
    },
    id: 107,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1588,
      y: 1394,
    },
    id: 108,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1976,
      y: 1305,
    },
    id: 109,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2122,
      y: 1008,
    },
    id: 110,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2304,
      y: 706,
    },
    id: 111,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1505,
      y: 893,
    },
    id: 112,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 557,
      y: 921,
    },
    id: 113,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1140,
      y: 893,
    },
    id: 114,
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1205,
      y: 655,
    },
    id: 115,
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 1441,
      y: 1409,
    },
    id: 116,
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 2152,
      y: 1395,
    },
    id: 117,
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 1621,
      y: 815,
    },
    id: 118,
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 1051,
      y: 799,
    },
    id: 119,
  },
  {
    type: 'RECEPTACLE',
    position: {
      x: 264,
      y: 1357,
    },
    id: 120,
  },
  {
    type: 'RECEPTACLE',
    position: {
      x: 1087,
      y: 1332,
    },
    id: 121,
  },
  {
    type: 'RECEPTACLE',
    position: {
      x: 1294,
      y: 827,
    },
    id: 122,
  },
  {
    type: 'CHERUB',
    position: {
      x: 229,
      y: 1484,
    },
    id: 123,
  },
  {
    type: 'CHERUB',
    position: {
      x: 301,
      y: 1514,
    },
    id: 124,
  },
  {
    type: 'CHERUB',
    position: {
      x: 185,
      y: 1623,
    },
    id: 125,
  },
  {
    type: 'CHERUB',
    position: {
      x: 170,
      y: 1783,
    },
    id: 126,
  },
  {
    type: 'CHERUB',
    position: {
      x: 583,
      y: 1574,
    },
    id: 127,
  },
  {
    type: 'CHERUB',
    position: {
      x: 735,
      y: 1629,
    },
    id: 128,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1012,
      y: 1753,
    },
    id: 129,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1354,
      y: 1662,
    },
    id: 130,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1113,
      y: 1942,
    },
    id: 131,
  },
  {
    type: 'CHERUB',
    position: {
      x: 788,
      y: 1313,
    },
    id: 132,
  },
  {
    type: 'CHERUB',
    position: {
      x: 869,
      y: 1306,
    },
    id: 133,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1063,
      y: 1301,
    },
    id: 134,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1208,
      y: 1340,
    },
    id: 135,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1273,
      y: 1512,
    },
    id: 136,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1405,
      y: 1474,
    },
    id: 137,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1265,
      y: 1270,
    },
    id: 138,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1440,
      y: 1236,
    },
    id: 139,
  },
  {
    type: 'CHERUB',
    position: {
      x: 2098,
      y: 1272,
    },
    id: 140,
  },
  {
    type: 'CHERUB',
    position: {
      x: 2125,
      y: 1209,
    },
    id: 141,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1858,
      y: 1064,
    },
    id: 142,
  },
  {
    type: 'CHERUB',
    position: {
      x: 2329,
      y: 1067,
    },
    id: 143,
  },
  {
    type: 'CHERUB',
    position: {
      x: 2403,
      y: 833,
    },
    id: 144,
  },
  {
    type: 'CHERUB',
    position: {
      x: 2265,
      y: 528,
    },
    id: 145,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1500,
      y: 716,
    },
    id: 146,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1517,
      y: 775,
    },
    id: 147,
  },
  {
    type: 'CHERUB',
    position: {
      x: 499,
      y: 928,
    },
    id: 148,
  },
  {
    type: 'CHERUB',
    position: {
      x: 825,
      y: 1130,
    },
    id: 149,
  },
  {
    type: 'CHERUB',
    position: {
      x: 910,
      y: 1072,
    },
    id: 150,
  },
  {
    type: 'CHERUB',
    position: {
      x: 998,
      y: 1187,
    },
    id: 151,
  },
  {
    type: 'CHERUB',
    position: {
      x: 991,
      y: 998,
    },
    id: 152,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1303,
      y: 715,
    },
    id: 153,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1053,
      y: 658,
    },
    id: 154,
  },
  {
    type: 'CHERUB',
    position: {
      x: 1187,
      y: 999,
    },
    id: 155,
  },
  {
    type: 'BEAD',
    position: {
      x: 258,
      y: 1539,
    },
    id: 156,
  },
  {
    type: 'BEAD',
    position: {
      x: 1146,
      y: 1720,
    },
    id: 157,
  },
  {
    type: 'BEAD',
    position: {
      x: 1254,
      y: 1577,
    },
    id: 158,
  },
  {
    type: 'BEAD',
    position: {
      x: 1383,
      y: 1335,
    },
    id: 159,
  },
  {
    type: 'BEAD',
    position: {
      x: 1735,
      y: 1392,
    },
    id: 160,
  },
  {
    type: 'BEAD',
    position: {
      x: 1826,
      y: 1332,
    },
    id: 161,
  },
  {
    type: 'BEAD',
    position: {
      x: 1826,
      y: 1155,
    },
    id: 162,
  },
  {
    type: 'BEAD',
    position: {
      x: 2392,
      y: 979,
    },
    id: 163,
  },
  {
    type: 'BEAD',
    position: {
      x: 1680,
      y: 800,
    },
    id: 164,
  },
  {
    type: 'BEAD',
    position: {
      x: 1680,
      y: 710,
    },
    id: 165,
  },
  {
    type: 'BEAD',
    position: {
      x: 347,
      y: 1160,
    },
    id: 166,
  },
  {
    type: 'BEAD',
    position: {
      x: 999,
      y: 888,
    },
    id: 167,
  },
  {
    type: 'BEAD',
    position: {
      x: 1034,
      y: 920,
    },
    id: 168,
  },
  {
    type: 'BEAD',
    position: {
      x: 1083,
      y: 741,
    },
    id: 169,
  },
  {
    type: 'WAXSEED',
    position: {
      x: 93,
      y: 1631,
    },
    id: 170,
  },
  {
    type: 'WAXSEED',
    position: {
      x: 1652,
      y: 1395,
    },
    id: 171,
  },
  {
    type: 'WAXSEED',
    position: {
      x: 1593,
      y: 864,
    },
    id: 172,
  },
  {
    type: 'WAXSEED',
    position: {
      x: 763,
      y: 973,
    },
    id: 173,
  },
  {
    type: 'PRAYER',
    position: {
      x: 51,
      y: 1692,
    },
    id: 174,
  },
  {
    type: 'PRAYER',
    position: {
      x: 1148,
      y: 1596,
    },
    id: 175,
  },
  {
    type: 'PRAYER',
    position: {
      x: 1417,
      y: 1761,
    },
    id: 176,
  },
  {
    type: 'PRAYER',
    position: {
      x: 816,
      y: 1332,
    },
    id: 177,
  },
  {
    type: 'PRAYER',
    position: {
      x: 994,
      y: 1363,
    },
    id: 178,
  },
  {
    type: 'PRAYER',
    position: {
      x: 1239,
      y: 1332,
    },
    id: 179,
  },
  {
    type: 'PRAYER',
    position: {
      x: 1175,
      y: 1543,
    },
    id: 180,
  },
  {
    type: 'PRAYER',
    position: {
      x: 1562,
      y: 1335,
    },
    id: 181,
  },
  {
    type: 'PRAYER',
    position: {
      x: 1831,
      y: 1036,
    },
    id: 182,
  },
  {
    type: 'PRAYER',
    position: {
      x: 2298,
      y: 1039,
    },
    id: 183,
  },
  {
    type: 'PRAYER',
    position: {
      x: 2482,
      y: 982,
    },
    id: 184,
  },
  {
    type: 'PRAYER',
    position: {
      x: 617,
      y: 1098,
    },
    id: 185,
  },
  {
    type: 'TRIBUTE',
    position: {
      x: 140,
      y: 1811,
    },
    id: 186,
  },
  {
    type: 'TRIBUTE',
    position: {
      x: 971,
      y: 1627,
    },
    id: 187,
  },
  {
    type: 'TRIBUTE',
    position: {
      x: 608,
      y: 918,
    },
    id: 188,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 330,
      y: 1750,
    },
    id: 189,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 707,
      y: 1629,
    },
    id: 190,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1116,
      y: 1747,
    },
    id: 191,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 317,
      y: 1394,
    },
    id: 192,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1174,
      y: 1245,
    },
    id: 193,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1978,
      y: 1336,
    },
    id: 194,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1665,
      y: 1190,
    },
    id: 195,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 2045,
      y: 1048,
    },
    id: 196,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1539,
      y: 864,
    },
    id: 197,
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 736,
      y: 1038,
    },
    id: 198,
  },
  {
    type: 'TOOL',
    position: {
      x: 377,
      y: 1671,
    },
    id: 199,
  },
  {
    type: 'TOOL',
    position: {
      x: 1119,
      y: 1783,
    },
    id: 200,
  },
  {
    type: 'TOOL',
    position: {
      x: 942,
      y: 1335,
    },
    id: 201,
  },
  {
    type: 'TOOL',
    position: {
      x: 1054,
      y: 1337,
    },
    id: 202,
  },
  {
    type: 'TOOL',
    position: {
      x: 883,
      y: 1157,
    },
    id: 203,
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 410,
      y: 1781,
    },
    id: 204,
  },
  {
    type: 'BEAD',
    position: {
      x: 463,
      y: 1722,
    },
    id: 205,
  },
  {
    type: 'BEAD',
    position: {
      x: 2243,
      y: 766,
    },
    id: 206,
  },
  {
    type: 'BEAD',
    position: {
      x: 529,
      y: 1060,
    },
    id: 207,
  },
  {
    type: 'BEAD',
    position: {
      x: 813,
      y: 967,
    },
    id: 208,
  },
  {
    type: 'CHALICE',
    position: {
      x: 647,
      y: 1571,
    },
    id: 209,
  },
  {
    type: 'CHALICE',
    position: {
      x: 1858,
      y: 1274,
    },
    id: 210,
  },
  {
    type: 'CHALICE',
    position: {
      x: 496,
      y: 1158,
    },
    id: 211,
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 1621,
      y: 1274,
    },
    id: 212,
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 2360,
      y: 834,
    },
    id: 213,
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 2272,
      y: 564,
    },
    id: 214,
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 1115,
      y: 684,
    },
    id: 215,
  },
  {
    type: 'CRYSTAL_SHARD',
    position: {
      x: 1974,
      y: 1275,
    },
    id: 216,
  },
  {
    type: 'CRYSTAL_SHARD',
    position: {
      x: 1316,
      y: 666,
    },
    id: 217,
  },
];
