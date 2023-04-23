import * as React from "react";
import {getMatrix, getNumbers, multiStyles} from "../../utils";
import Controls from "../Controls";
import Grid from "../Grid";
import N from "../Grid/components/N";

import styles from "./styles.module.scss";

const DEFAUTL_DIM = [3, 3];
const SubmitState = {
  DEFAULT: "default",
  SUCCESS: "success",
};
const SubmitText = {
  DEFAULT: "Submit",
  SUCCESS: "Thanks for submitting! 😀",
};

const AddPuzzleScreen = ({open, onClose}) => {
  const [dim, setDim] = React.useState(DEFAUTL_DIM);
  const [gridMat, setGridMat] = React.useState([]);
  const [gridNumbers, setGridNumbers] = React.useState([]);

  React.useEffect(() => {
    if (!isNaN(dim[0]) && dim[0] > 0 && !isNaN(dim[1]) && dim[1] > 0) {
      setGridMat(getMatrix(dim, [], gridNumbers));
    }
  }, [dim[0], dim[1], JSON.stringify(gridNumbers)]);

  React.useEffect(() => {
    setGridNumbers(getNumbers(gridMat));
  }, [JSON.stringify(gridMat)]);

  const [gridReset, setGridReset] = React.useState(false);
  React.useEffect(() => {
    if (gridReset) {
      const shouldUseDefaultDim =
        isNaN(dim[0]) || dim[0] <= 0 || isNaN(dim[1]) || dim[1] <= 0;
      if (shouldUseDefaultDim) {
        setDim(DEFAUTL_DIM);
      }
      setGridMat(getMatrix(shouldUseDefaultDim ? DEFAUTL_DIM : dim));
      setGridNumbers([]);
      setGridReset(false);
    }
  }, [gridReset]);
  const [submitState, setSubmitState] = React.useState(SubmitState.DEFAULT);
  const [submitText, setSubmitText] = React.useState(SubmitText.DEFAULT);
  const onSubmit = () => {
    setSubmitState(SubmitState.SUCCESS);
    setSubmitText(SubmitText.SUCCESS);
  };
  React.useEffect(() => {
    let timeout;
    if (submitState === SubmitState.SUCCESS) {
      timeout = setTimeout(() => {
        setSubmitState(SubmitState.DEFAULT);
        setSubmitText(SubmitText.DEFAULT);
      }, 5000);
    }

    return () => !isNaN(timeout) && clearTimeout(timeout);
  }, [submitState]);

  const shouldShowGrid =
    !isNaN(dim[0]) && dim[0] > 0 && !isNaN(dim[1]) && dim[1] > 0;

  return (
    <>
      {open && (
        <div className={styles.screen}>
          <span className={styles.cross} onClick={onClose} />

          <section className={styles.dimension}>
            <div className={styles.title}>Set dimensions</div>
            <div className={styles.content}>
              <div className={styles.dimInputWrapper}>
                <N
                  value={dim[0]}
                  setNum={(n) => setDim([n, dim[1]])}
                  editorMode
                  className={styles.input}
                />
                X
                <N
                  value={dim[1]}
                  setNum={(n) => setDim([dim[0], n])}
                  editorMode
                  className={styles.input}
                />
              </div>
            </div>
          </section>
          <section className={styles.matrix}>
            <div className={styles.title}>Set matrix</div>
            <div className={styles.content}>
              <div className={styles.matrixGrid}>
                {shouldShowGrid ? (
                  <Grid matrix={gridMat} setMatrix={setGridMat} editorMode />
                ) : (
                  "Please set valid dimensions above"
                )}
              </div>
            </div>
            <div className={styles.content}>
              {shouldShowGrid && (
                <a
                  href={`mailto:amey23399@gmail.com?subject=Slither Link Example&body=${JSON.stringify(
                    gridNumbers
                  )}`}
                  className={multiStyles(styles, ["submitButton", submitState])}
                  onClick={onSubmit}
                >
                  {submitText}
                </a>
              )}
            </div>
          </section>
          <Controls onReset={() => setGridReset(true)} editorMode />
        </div>
      )}
    </>
  );
};

export default AddPuzzleScreen;
