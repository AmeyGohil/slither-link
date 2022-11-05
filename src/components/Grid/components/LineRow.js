import * as React from "react";
import {CLICK, EDGE_STATE, ORIENTATION} from "../../../constants";
import {edgeHelperState, isNodeActive} from "../../../utils";
import Edge from "./Edge";
import Node from "./Node";
import Row from "./Row";

const LineRow = ({matX, mat = [], n = 1, onLineClick, easyMode}) => {
  return (
    <Row>
      {mat.length &&
        Array(n - 1)
          .fill(0)
          .map((_, i) => [
            <Node
              key={`node_${matX + i}`}
              active={isNodeActive(mat, [matX, i])}
            />,
            <Edge
              notAllowed={mat[matX][i].r === EDGE_STATE.NOT_ALLOWED}
              orientation={ORIENTATION.HOR}
              active={mat[matX][i].r !== EDGE_STATE.DEFAULT ? 1 : 0}
              onClick={() => onLineClick(matX, i, ORIENTATION.HOR, CLICK.LEFT)}
              onRightClick={() =>
                onLineClick(matX, i, ORIENTATION.HOR, CLICK.RIGHT)
              }
              onMiddleClick={() =>
                onLineClick(matX, i, ORIENTATION.HOR, CLICK.MIDDLE)
              }
              hovered={mat[matX][i].r === EDGE_STATE.HOVERED ? 1 : 0}
              key={`edge_${matX + i}`}
              easyState={easyMode && edgeHelperState([matX, i], mat)}
            />,
          ])
          .concat([
            <Node
              key={`node_${matX + n - 1}`}
              active={isNodeActive(mat, [matX, n - 1]) ? 1 : 0}
            />,
          ])}
    </Row>
  );
};

export default LineRow;
