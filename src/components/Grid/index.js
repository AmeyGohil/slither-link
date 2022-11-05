import * as React from "react";
import {CLICK, NODE, EDGE_STATE, ORIENTATION} from "../../constants";
import {getNextState, multiStyles} from "../../utils";
import LineRow from "./components/LineRow";
import NumberRow from "./components/NumberRow";
import styles from "./styles.module.scss";

/*
  Grid traversal
    (0, 0) -- (0, 1) -- (0, 2) -->
      |         |         |
      |         |         |
    (1, 0) -- (1, 1) -- (1, 2) -->
      |         |         |
      |         |         |
    (2, 0) -- (2, 1) -- (2, 2) -->
      |         |         |
      |         |         |
      V         V         V
*/

const Grid = ({
  matrix,
  setMatrix,
  readOnly,
  editorMode,
  easyMode = true,
  state,
  className,
}) => {
  const nHorLine = matrix?.length || 0;
  const nVerLine = matrix?.[0]?.length || 0;

  if (nHorLine === 0 || nVerLine === 0) {
    return null;
  }

  const updateMatrix = (dataArray) => {
    let temp = matrix.slice();
    dataArray.forEach(({node: [x, y], data}) => {
      temp[x][y] = {...temp[x][y], ...data};
    });
    setMatrix(temp);
  };

  const onLineClick = (x, y, orientation, click) => {
    if (readOnly) {
      return;
    }

    const isRightClick = click === CLICK.RIGHT;
    const isMiddleClick = click === CLICK.MIDDLE;
    const isLeftClick = click === CLICK.LEFT;
    const node = [x, y];
    const edge = orientation === ORIENTATION.HOR ? NODE.R : NODE.D;
    const currentState = matrix[x][y][edge];
    let newState = EDGE_STATE.DEFAULT;

    if (isMiddleClick) {
      newState = EDGE_STATE.DEFAULT;
    }
    if (isRightClick) {
      newState = EDGE_STATE;
    }
    if (isLeftClick) {
      newState = getNextState(currentState);
    }

    if (currentState === newState) {
      return;
    }

    updateMatrix([{node, data: {[edge]: newState}}]);
  };

  const onNumberChange = (x, y, num) => {
    if (!editorMode || readOnly) {
      return;
    }
    updateMatrix([{node: [x, y], data: {n: num}}]);
  };

  // console.log(JSON.stringify(matrix));

  return (
    <div
      className={multiStyles(styles, [
        "canvas",
        className,
        state,
        readOnly && "readOnly",
      ])}
      // disabling right click on grid
      onContextMenu={(e) => e.preventDefault()}
    >
      {Array(nHorLine - 1)
        .fill(0)
        .map((_, i) => {
          return [
            <LineRow
              matX={i}
              mat={matrix}
              n={nVerLine}
              onLineClick={onLineClick}
              key={`line_row_${i + 1}`}
              easyMode={easyMode}
            />,
            <NumberRow
              matX={i}
              mat={matrix}
              n={nVerLine}
              onLineClick={onLineClick}
              onNumberChange={onNumberChange}
              editorMode={editorMode}
              key={`number_row_${i + 1}`}
              easyMode={easyMode}
            />,
          ];
        })
        .concat([
          <LineRow
            matX={nHorLine - 1}
            mat={matrix}
            n={nVerLine}
            onLineClick={onLineClick}
            key={`line_row_${nHorLine - 1}`}
            easyMode={easyMode}
          />,
        ])}
    </div>
  );
};

export default Grid;
