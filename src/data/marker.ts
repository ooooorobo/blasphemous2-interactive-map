import { Point } from '../type/Point.ts';

type MarkerType =
  'SISTER' // 자매
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
  | 'CRYSTAL_SHARD'

export type Marker = {
  // id: string;
  type: MarkerType;
  position: Point;
}

export const MarkerList: Marker[] = [
  {
    type: 'SISTER',
    position: {
      x: 283,
      y: 951,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 265,
      y: 1065,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 382,
      y: 1347,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 641,
      y: 1158,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 1415,
      y: 1626,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 1408,
      y: 1187,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 1681,
      y: 1155,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 2127,
      y: 1363,
    },
  },
  {
    type: 'SISTER',
    position: {
      x: 1794,
      y: 1130,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 238,
      y: 975,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 645,
      y: 1511,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 1263,
      y: 1929,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 2169,
      y: 1426,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 1736,
      y: 1148,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 2434,
      y: 1067,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 2479,
      y: 831,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 1177,
      y: 861,
    },
  },
  {
    type: 'WEAPON',
    position: {
      x: 1294,
      y: 676,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 196,
      y: 1071,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 229,
      y: 1812,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 902,
      y: 1336,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 905,
      y: 1304,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 1470,
      y: 1277,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 1948,
      y: 1273,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 2002,
      y: 1425,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 2474,
      y: 924,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 407,
      y: 1126,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 725,
      y: 1095,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 936,
      y: 713,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 1322,
      y: 890,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 201,
      y: 1100,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1090,
      y: 1600,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1133,
      y: 1630,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1218,
      y: 1720,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1178,
      y: 1952,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 494,
      y: 1333,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 823,
      y: 1360,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1174,
      y: 1455,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1354,
      y: 1484,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1295,
      y: 1479,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1295,
      y: 1286,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1525,
      y: 1518,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1651,
      y: 1303,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1384,
      y: 1214,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1615,
      y: 1096,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1709,
      y: 1007,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 2037,
      y: 983,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 2271,
      y: 947,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1443,
      y: 832,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1620,
      y: 710,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 441,
      y: 1483,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 435,
      y: 1126,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 610,
      y: 1071,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 851,
      y: 949,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 792,
      y: 1129,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 938,
      y: 1126,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 951,
      y: 979,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 951,
      y: 929,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 953,
      y: 810,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 940,
      y: 742,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1106,
      y: 420,
    },
  },
  {
    type: 'MARTYRDOM',
    position: {
      x: 1237,
      y: 383,
    },
  },
  {
    type: 'ROSARY',
    position: {
      x: 1317,
      y: 1486,
    },
  },
  {
    type: 'ROSARY',
    position: {
      x: 303,
      y: 937,
    },
  },
  {
    type: 'ROSARY',
    position: {
      x: 1262,
      y: 837,
    },
  },
  {
    type: 'CHARIOT',
    position: {
      x: 1317,
      y: 1486,
    },
  },
  {
    type: 'CHARIOT',
    position: {
      x: 1589,
      y: 1099,
    },
  },
  {
    type: 'CHARIOT',
    position: {
      x: 1682,
      y: 1011,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 202,
      y: 1193,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 260,
      y: 1803,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 672,
      y: 1633,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 1152,
      y: 2019,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 319,
      y: 1329,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 1175,
      y: 1212,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 1268,
      y: 1308,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 1650,
      y: 1516,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 2064,
      y: 1218,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 2329,
      y: 980,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 1526,
      y: 654,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 1351,
      y: 744,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 553,
      y: 1156,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 939,
      y: 1038,
    },
  },
  {
    type: 'NPC',
    position: {
      x: 1148,
      y: 654,
    },
  },
  {
    type: 'ABILITY',
    position: {
      x: 202,
      y: 1220,
    },
  },
  {
    type: 'ABILITY',
    position: {
      x: 1060,
      y: 2080,
    },
  },
  {
    type: 'ABILITY',
    position: {
      x: 1295,
      y: 1569,
    },
  },
  {
    type: 'ABILITY',
    position: {
      x: 2301,
      y: 946,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 243,
      y: 1326,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 511,
      y: 1633,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 1116,
      y: 2017,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 547,
      y: 1366,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 1953,
      y: 1427,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 2139,
      y: 831,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 2272,
      y: 534,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 1478,
      y: 655,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 598,
      y: 1162,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 1218,
      y: 120,
    },
  },
  {
    type: 'BOSS',
    position: {
      x: 1184,
      y: 69,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 216,
      y: 1369,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2031,
      y: 1012,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2122,
      y: 952,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 461,
      y: 1042,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1293,
      y: 1690,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 349,
      y: 1331,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1063,
      y: 1278,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1172,
      y: 1290,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1246,
      y: 1547,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1251,
      y: 1310,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1588,
      y: 1394,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1976,
      y: 1305,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2122,
      y: 1008,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 2304,
      y: 706,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1505,
      y: 893,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 557,
      y: 921,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1140,
      y: 893,
    },
  },
  {
    type: 'QUEST_ITEM',
    position: {
      x: 1205,
      y: 655,
    },
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 1441,
      y: 1409,
    },
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 2152,
      y: 1395,
    },
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 1621,
      y: 815,
    },
  },
  {
    type: 'FERVENT_KISS',
    position: {
      x: 1051,
      y: 799,
    },
  },
  {
    type: 'RECEPTACLE',
    position: {
      x: 264,
      y: 1357,
    },
  },
  {
    type: 'RECEPTACLE',
    position: {
      x: 1087,
      y: 1332,
    },
  },
  {
    type: 'RECEPTACLE',
    position: {
      x: 1294,
      y: 827,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 229,
      y: 1484,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 301,
      y: 1514,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 185,
      y: 1623,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 170,
      y: 1783,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 583,
      y: 1574,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 735,
      y: 1629,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1012,
      y: 1753,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1354,
      y: 1662,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1113,
      y: 1942,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 788,
      y: 1313,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 869,
      y: 1306,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1063,
      y: 1301,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1208,
      y: 1340,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1273,
      y: 1512,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1405,
      y: 1474,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1265,
      y: 1270,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1440,
      y: 1236,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 2098,
      y: 1272,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 2125,
      y: 1209,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1858,
      y: 1064,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 2329,
      y: 1067,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 2403,
      y: 833,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 2265,
      y: 528,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1500,
      y: 716,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1517,
      y: 775,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 499,
      y: 928,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 825,
      y: 1130,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 910,
      y: 1072,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 998,
      y: 1187,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 991,
      y: 998,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1303,
      y: 715,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1053,
      y: 658,
    },
  },
  {
    type: 'CHERUB',
    position: {
      x: 1187,
      y: 999,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 258,
      y: 1539,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1146,
      y: 1720,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1254,
      y: 1577,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1383,
      y: 1335,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1735,
      y: 1392,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1826,
      y: 1332,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1826,
      y: 1155,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 2392,
      y: 979,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1680,
      y: 800,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1680,
      y: 710,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 347,
      y: 1160,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 999,
      y: 888,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1034,
      y: 920,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 1083,
      y: 741,
    },
  },
  {
    type: 'WAXSEED',
    position: {
      x: 93,
      y: 1631,
    },
  },
  {
    type: 'WAXSEED',
    position: {
      x: 1652,
      y: 1395,
    },
  },
  {
    type: 'WAXSEED',
    position: {
      x: 1593,
      y: 864,
    },
  },
  {
    type: 'WAXSEED',
    position: {
      x: 763,
      y: 973,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 51,
      y: 1692,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 1148,
      y: 1596,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 1417,
      y: 1761,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 816,
      y: 1332,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 994,
      y: 1363,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 1239,
      y: 1332,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 1175,
      y: 1543,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 1562,
      y: 1335,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 1831,
      y: 1036,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 2298,
      y: 1039,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 2482,
      y: 982,
    },
  },
  {
    type: 'PRAYER',
    position: {
      x: 617,
      y: 1098,
    },
  },
  {
    type: 'TRIBUTE',
    position: {
      x: 140,
      y: 1811,
    },
  },
  {
    type: 'TRIBUTE',
    position: {
      x: 971,
      y: 1627,
    },
  },
  {
    type: 'TRIBUTE',
    position: {
      x: 608,
      y: 918,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 330,
      y: 1750,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 707,
      y: 1629,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1116,
      y: 1747,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 317,
      y: 1394,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1174,
      y: 1245,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1978,
      y: 1336,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1665,
      y: 1190,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 2045,
      y: 1048,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 1539,
      y: 864,
    },
  },
  {
    type: 'HIDDEN_SYMBOL',
    position: {
      x: 736,
      y: 1038,
    },
  },
  {
    type: 'TOOL',
    position: {
      x: 377,
      y: 1671,
    },
  },
  {
    type: 'TOOL',
    position: {
      x: 1119,
      y: 1783,
    },
  },
  {
    type: 'TOOL',
    position: {
      x: 942,
      y: 1335,
    },
  },
  {
    type: 'TOOL',
    position: {
      x: 1054,
      y: 1337,
    },
  },
  {
    type: 'TOOL',
    position: {
      x: 883,
      y: 1157,
    },
  },
  {
    type: 'ALTARPIECE',
    position: {
      x: 410,
      y: 1781,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 463,
      y: 1722,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 2243,
      y: 766,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 529,
      y: 1060,
    },
  },
  {
    type: 'BEAD',
    position: {
      x: 813,
      y: 967,
    },
  },
  {
    type: 'CHALICE',
    position: {
      x: 647,
      y: 1571,
    },
  },
  {
    type: 'CHALICE',
    position: {
      x: 1858,
      y: 1274,
    },
  },
  {
    type: 'CHALICE',
    position: {
      x: 496,
      y: 1158,
    },
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 1621,
      y: 1274,
    },
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 2360,
      y: 834,
    },
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 2272,
      y: 564,
    },
  },
  {
    type: 'DAUGHTER',
    position: {
      x: 1115,
      y: 684,
    },
  },
  {
    type: 'CRYSTAL_SHARD',
    position: {
      x: 1974,
      y: 1275,
    },
  },
  {
    type: 'CRYSTAL_SHARD',
    position: {
      x: 1316,
      y: 666,
    },
  },
];