import * as React from "react";
import {CLICK, EDGE_STATE, ORIENTATION} from "../../../constants";
import {edgeHelperState, numberHelperState} from "../../../utils";
import Edge from "./Edge";
import N from "./N";
import Row from "./Row";

const NumberRow = ({
  matX,
  mat = [],
  n = 1,
  onLineClick,
  onNumberChange,
  editorMode,
  easyMode,
}) => (
  <Row>
    {mat.length &&
      Array(n - 1)
        .fill(0)
        .map((_, i) => {
          return [
            <Edge
              notAllowed={mat[matX][i].d === EDGE_STATE.NOT_ALLOWED}
              orientation={ORIENTATION.VER}
              active={mat[matX][i].d !== EDGE_STATE.DEFAULT ? 1 : 0}
              onClick={() => onLineClick(matX, i, ORIENTATION.VER, CLICK.LEFT)}
              onRightClick={() =>
                onLineClick(matX, i, ORIENTATION.VER, CLICK.RIGHT)
              }
              onMiddleClick={() =>
                onLineClick(matX, i, ORIENTATION.VER, CLICK.MIDDLE)
              }
              hovered={mat[matX][i].d === EDGE_STATE.HOVERED ? 1 : 0}
              key={`edge_${matX + i}`}
              easyState={easyMode && edgeHelperState([matX, i], mat)}
            />,
            <N
              value={mat[matX][i].n}
              setNum={(n) => onNumberChange(matX, i, n)}
              editorMode={editorMode}
              key={`number_${matX + i}`}
              easyState={easyMode && numberHelperState([matX, i], mat)}
            />,
          ];
        })
        .concat([
          <Edge
            notAllowed={mat[matX][n - 1].d === EDGE_STATE.NOT_ALLOWED}
            orientation={ORIENTATION.VER}
            active={mat[matX][n - 1].d !== EDGE_STATE.DEFAULT ? 1 : 0}
            onClick={() =>
              onLineClick(matX, n - 1, ORIENTATION.VER, CLICK.LEFT)
            }
            onRightClick={() =>
              onLineClick(matX, n - 1, ORIENTATION.VER, CLICK.MIDDLE)
            }
            onMiddleClick={() =>
              onLineClick(matX, n - 1, ORIENTATION.VER, CLICK.RIGHT)
            }
            hovered={mat[matX][n - 1].d === EDGE_STATE.HOVERED ? 1 : 0}
            key={`edge_${matX + n - 1}`}
            easyState={easyMode && edgeHelperState([matX, n - 1], mat)}
          />,
        ])}
  </Row>
);

export default NumberRow;
