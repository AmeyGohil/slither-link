import {DEFAULT_NODE, NODE, EDGE_STATE} from "./constants";

// get deep copy of JSON
export const copy = (json) => JSON.parse(JSON.stringify(json));

// to get multiple styles in space-seperated format
export const multiStyles = (styles, classNames) =>
  classNames
    .reduce(
      (classNames, className) => [
        ...classNames,
        ...(!className ? [] : [styles?.[className] || className]),
      ],
      []
    )
    .join(" ");

// to check if number is valid number
export const isValidN = (n, lim) => n >= 0 && n <= lim;

// to check all elements are valid numbers
export const areValidN = (n, lim) => n.every((n) => isValidN(n, lim));

// to check if edge state is not default
export const isValidEdgeState = (edgeState) => edgeState !== EDGE_STATE.DEFAULT;

export const getMatrix = ([dim1, dim2], edges = [], numbers = []) => {
  const nRows = dim1;
  const nCols = dim2;

  let temp = new Array(dim1 + 1)
    .fill(0)
    .map(() => new Array(dim2 + 1).fill(DEFAULT_NODE));

  if (numbers.length > 0) {
    numbers.forEach(({r, c, n}) => {
      if (r <= nRows && c <= nCols) {
        temp[r - 1][c - 1] = {...temp[r - 1][c - 1], [NODE.N]: n};
      }
    });
  }

  if (edges.length > 0) {
    edges.forEach(({a: [sX, sY], b: [eX, eY], notAllowed, hovered}) => {
      // excluding invalid edges
      if (!areValidN([sX, eX], nRows) || !areValidN([sY, eY], nCols)) {
        return;
      }

      const hor = sX === eX;
      const ver = sY === eY;

      // excluding cases where both points are same
      // or where edge is not hor | ver
      // Assumption: all edges are between two adjacent nodes
      if ((hor && ver) || (!hor && !ver)) {
        return;
      }

      let startX, startY, endX, endY;

      // horizonal line
      if (hor) {
        startX = endX = sX;
        if (sY > eY) {
          startY = eY;
          endY = sY;
        }
        if (sY < eY) {
          startY = sY;
          endY = eY;
        }
      }
      // vertical line
      if (ver) {
        startY = endY = sY;
        if (sX > eX) {
          startX = eX;
          endX = sX;
        }
        if (sX < eX) {
          startX = sX;
          endX = eX;
        }
      }

      // check if all nodes are valid nodes
      if (
        areValidN([startX, endX], nRows) &&
        areValidN([startY, endY], nCols)
      ) {
        const edgeState = notAllowed
          ? EDGE_STATE.NOT_ALLOWED
          : hovered
          ? EDGE_STATE.HOVERED
          : EDGE_STATE.ACTIVE;

        temp[startX][startY] = {
          ...temp[startX][startY],
          ...(hor && {[NODE.R]: edgeState}),
          ...(ver && {[NODE.D]: edgeState}),
        };
      }
    });
  }

  return temp;
};

// to check if a node has an active edge
export const isNodeActive = (mat, [x, y]) => {
  let node = mat[x][y];
  if ([node[NODE.R], node[NODE.D]].includes(EDGE_STATE.ACTIVE)) {
    return true;
  }
  // checking upper edge
  node = mat?.[x - 1]?.[y];
  if (node?.[NODE.D] === EDGE_STATE.ACTIVE) {
    return true;
  }
  // checking left edge
  node = mat[x]?.[y - 1];

  return node?.[NODE.R] === EDGE_STATE.ACTIVE;
};

// get an array of all numbers present in the matrix
export const getNumbers = (mat) => {
  let numbers = [];
  let nRow = mat?.length;
  let nCol = mat?.[0]?.length;
  if (!nRow || !nCol) {
    return;
  }

  mat.forEach((row, r) => {
    if (r >= nRow - 1) return;
    row.forEach((node, c) => {
      if (c >= nCol - 1) return;
      numbers = [
        ...numbers,
        ...(node[NODE.N] > -1
          ? [{r: r + 1, c: c + 1, [NODE.N]: node[NODE.N]}]
          : []),
      ];
    });
  });
  return numbers;
};

// check if matrix has any valid edges
export const hasAnyEdges = (mat) => {
  return mat.some((row) =>
    row.some(
      (node) => isValidEdgeState(node[NODE.R]) || isValidEdgeState(node[NODE.D])
    )
  );
};

// get an array of all edges present in the matrix
export const getEdges = (mat) => {
  let edges = [];
  mat.forEach((row, sX) => {
    row.forEach((node, sY) => {
      const horEdgeState = node[NODE.R];
      if (isValidEdgeState(horEdgeState)) {
        const notAllowed = horEdgeState === EDGE_STATE.NOT_ALLOWED;
        const hovered = horEdgeState === EDGE_STATE.HOVERED;
        edges = [
          ...edges,
          {
            a: [sX, sY],
            b: [sX, sY + 1],
            ...(notAllowed && {notAllowed}),
            ...(hovered && {hovered}),
          },
        ];
      }
      const verEdgeState = node[NODE.D];
      if (isValidEdgeState(verEdgeState)) {
        const notAllowed = verEdgeState === EDGE_STATE.NOT_ALLOWED;
        const hovered = verEdgeState === EDGE_STATE.HOVERED;
        edges = [
          ...edges,
          {
            a: [sX, sY],
            b: [sX + 1, sY],
            ...(notAllowed && {notAllowed}),
            ...(hovered && {hovered}),
          },
        ];
      }
    });
  });
  return edges;
};

// get an array of all active edges present in the matrix
export const getActiveEdges = (mat) => {
  return getEdges(mat).filter((edge) => !edge?.notAllowed && !edge?.hovered);
};

// get an array of all active edges present in the matrix
export const numberHelperState = ([x, y], mat) => {
  const n = mat[x][y].n;
  return "false";
};

// get an array of all active edges present in the matrix
export const edgeHelperState = ([x, y], mat) => {
  const n = mat[x][y].n;
  return "false";
};

export const getNextState = (state) => {
  if (state === EDGE_STATE.ACTIVE) {
    return EDGE_STATE.NOT_ALLOWED;
  }

  if (state === EDGE_STATE.DEFAULT) {
    return EDGE_STATE.ACTIVE;
  }

  return EDGE_STATE.DEFAULT;
};
