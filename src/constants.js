export const EDGE_STATE = {
  ACTIVE: "ACTIVE",
  NOT_ALLOWED: "NOT_ALLOWED",
  HOVERED: "HOVERED",
  DEFAULT: "DEFAULT",
};

export const CLICK = {
  RIGHT: "right",
  LEFT: "left",
  MIDDLE: "middle",
};

export const ORIENTATION = {
  HOR: "horizontal",
  VER: "vertical",
};

export const NODE = {
  R: "r", // right
  D: "d", // down
  N: "n", //number
};

export const DEFAULT_NODE = {
  // right side edge state
  [NODE.R]: EDGE_STATE.DEFAULT,
  // down side edge state
  [NODE.D]: EDGE_STATE.DEFAULT,
  // number
  [NODE.N]: -1,
};

export const EXAMPLE_GRID_PROPS = {
  dim: [7, 7],
  edges: [
    {a: [0, 0], b: [0, 1]},
    {a: [0, 0], b: [1, 0]},
    {a: [0, 1], b: [0, 2], notAllowed: true},
    {a: [0, 1], b: [1, 1]},
    {a: [0, 2], b: [0, 3], notAllowed: true},
    {a: [0, 2], b: [1, 2], notAllowed: true},
    {a: [0, 3], b: [0, 4]},
    {a: [0, 3], b: [1, 3]},
    {a: [0, 4], b: [0, 5]},
    {a: [0, 4], b: [1, 4], notAllowed: true},
    {a: [0, 5], b: [0, 6]},
    {a: [0, 5], b: [1, 5], notAllowed: true},
    {a: [0, 6], b: [0, 7]},
    {a: [0, 6], b: [1, 6], notAllowed: true},
    {a: [0, 7], b: [1, 7]},
    {a: [1, 0], b: [1, 1], notAllowed: true},
    {a: [1, 0], b: [2, 0]},
    {a: [1, 1], b: [1, 2]},
    {a: [1, 2], b: [1, 3], notAllowed: true},
    {a: [1, 2], b: [2, 2]},
    {a: [1, 3], b: [1, 4]},
    {a: [1, 3], b: [2, 3], notAllowed: true},
    {a: [1, 4], b: [1, 5]},
    {a: [1, 4], b: [2, 4], notAllowed: true},
    {a: [1, 5], b: [1, 6]},
    {a: [1, 5], b: [2, 5], notAllowed: true},
    {a: [1, 6], b: [1, 7], notAllowed: true},
    {a: [1, 6], b: [2, 6]},
    {a: [1, 7], b: [2, 7]},
    {a: [2, 0], b: [2, 1]},
    {a: [2, 1], b: [3, 1]},
    {a: [2, 2], b: [2, 3]},
    {a: [2, 2], b: [3, 2], notAllowed: true},
    {a: [2, 3], b: [2, 4], notAllowed: true},
    {a: [2, 3], b: [3, 3]},
    {a: [2, 4], b: [2, 5], notAllowed: true},
    {a: [2, 4], b: [3, 4], notAllowed: true},
    {a: [2, 5], b: [2, 6]},
    {a: [2, 5], b: [3, 5]},
    {a: [2, 6], b: [2, 7], notAllowed: true},
    {a: [2, 6], b: [3, 6], notAllowed: true},
    {a: [2, 7], b: [3, 7]},
    {a: [3, 0], b: [3, 1], notAllowed: true},
    {a: [3, 1], b: [3, 2]},
    {a: [3, 1], b: [4, 1], notAllowed: true},
    {a: [3, 2], b: [4, 2]},
    {a: [3, 3], b: [3, 4]},
    {a: [3, 4], b: [3, 5], notAllowed: true},
    {a: [3, 4], b: [4, 4]},
    {a: [3, 5], b: [3, 6], notAllowed: true},
    {a: [3, 5], b: [4, 5]},
    {a: [3, 6], b: [3, 7]},
    {a: [3, 6], b: [4, 6]},
    {a: [4, 0], b: [4, 1], notAllowed: true},
    {a: [4, 1], b: [4, 2], notAllowed: true},
    {a: [4, 1], b: [5, 1], notAllowed: true},
    {a: [4, 2], b: [4, 3]},
    {a: [4, 2], b: [5, 2], notAllowed: true},
    {a: [4, 3], b: [4, 4], notAllowed: true},
    {a: [4, 3], b: [5, 3]},
    {a: [4, 4], b: [4, 5]},
    {a: [4, 4], b: [5, 4], notAllowed: true},
    {a: [4, 5], b: [4, 6], notAllowed: true},
    {a: [4, 5], b: [5, 5], notAllowed: true},
    {a: [4, 6], b: [4, 7]},
    {a: [4, 6], b: [5, 6], notAllowed: true},
    {a: [4, 7], b: [5, 7]},
    {a: [5, 0], b: [5, 1], notAllowed: true},
    {a: [5, 1], b: [5, 2]},
    {a: [5, 1], b: [6, 1]},
    {a: [5, 2], b: [5, 3]},
    {a: [5, 2], b: [6, 2], notAllowed: true},
    {a: [5, 3], b: [5, 4], notAllowed: true},
    {a: [5, 3], b: [6, 3], notAllowed: true},
    {a: [5, 4], b: [5, 5]},
    {a: [5, 4], b: [6, 4]},
    {a: [5, 5], b: [5, 6], notAllowed: true},
    {a: [5, 5], b: [6, 5]},
    {a: [5, 6], b: [5, 7]},
    {a: [5, 6], b: [6, 6]},
    {a: [6, 0], b: [6, 1]},
    {a: [6, 0], b: [7, 0]},
    {a: [6, 1], b: [7, 1], notAllowed: true},
    {a: [6, 2], b: [6, 3]},
    {a: [6, 2], b: [7, 2]},
    {a: [6, 3], b: [6, 4], notAllowed: true},
    {a: [6, 3], b: [7, 3]},
    {a: [6, 4], b: [6, 5], notAllowed: true},
    {a: [6, 4], b: [7, 4]},
    {a: [6, 5], b: [6, 6], notAllowed: true},
    {a: [6, 5], b: [7, 5]},
    {a: [6, 6], b: [6, 7]},
    {a: [6, 6], b: [7, 6], notAllowed: true},
    {a: [6, 7], b: [7, 7]},
    {a: [7, 0], b: [7, 1]},
    {a: [7, 1], b: [7, 2]},
    {a: [7, 3], b: [7, 4]},
    {a: [7, 5], b: [7, 6]},
    {a: [7, 6], b: [7, 7]},
  ],
  numbers: [
    {r: 1, c: 4, n: 3},
    {r: 1, c: 5, n: 2},
    {r: 1, c: 6, n: 2},
    {r: 2, c: 1, n: 2},
    {r: 2, c: 2, n: 2},
    {r: 2, c: 3, n: 2},
    {r: 2, c: 6, n: 3},
    {r: 3, c: 1, n: 2},
    {r: 3, c: 2, n: 2},
    {r: 3, c: 5, n: 1},
    {r: 3, c: 6, n: 2},
    {r: 4, c: 3, n: 2},
    {r: 4, c: 5, n: 3},
    {r: 4, c: 7, n: 3},
    {r: 5, c: 1, n: 0},
    {r: 5, c: 6, n: 0},
    {r: 5, c: 7, n: 3},
    {r: 6, c: 1, n: 2},
    {r: 6, c: 7, n: 3},
    {r: 7, c: 2, n: 2},
    {r: 7, c: 3, n: 3},
    {r: 7, c: 5, n: 2},
  ],
};

export const NOT_ALLOWED_1_GRID_PROPS = {
  dim: [2, 2],
  edges: [
    {a: [0, 1], b: [1, 1], hovered: true},
    {a: [1, 0], b: [1, 1], hovered: true},
    {a: [1, 1], b: [1, 2]},
    {a: [1, 1], b: [2, 1]},
  ],
  numbers: [{r: 2, c: 2, n: 2}],
};

export const NOT_ALLOWED_2_GRID_PROPS = {
  dim: [2, 3],
  edges: [
    {a: [0, 1], b: [1, 1]},
    {a: [0, 2], b: [1, 2]},
    {a: [1, 0], b: [1, 1], hovered: true},
    {a: [1, 1], b: [1, 2]},
    {a: [1, 1], b: [2, 1], hovered: true},
    {a: [1, 2], b: [1, 3], hovered: true},
    {a: [1, 2], b: [2, 2], hovered: true},
  ],
  numbers: [{r: 1, c: 2, n: 3}],
};
