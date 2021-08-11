import * as React from "react";
import { CellState, Nonogram } from "models/nonogram";
import { getNonogramSideLength } from "util/nonogram";
import { LabelContainer, HorizontalContainer } from "./styles";

export interface Props {
  solution: Nonogram;
}

const getColVals = (board: Nonogram, col: number) => {
  const colLength = getNonogramSideLength(board.size);
  const colVals: number[] = [];

  let consecutiveCells = 0;

  for (let i = 0; i < colLength; i++) {
    const location = col + i * colLength;
    if (board.data[location] === CellState.Filled) {
      consecutiveCells++;
    } else if (consecutiveCells !== 0) {
      colVals.push(consecutiveCells);
      consecutiveCells = 0;
    }
  }

  // handle end case
  if (consecutiveCells !== 0) {
    colVals.push(consecutiveCells);
  }

  // handle empty case
  if (colVals.length == 0) {
    colVals.push(0);
  }

  return colVals;
};

export const NonogramHorizontalLabels = ({ solution }: Props) => {
  const rowLength = getNonogramSideLength(solution.size);
  const labels = Array<JSX.Element>(rowLength);

  for (let col = 0; col < rowLength; col++) {
    labels[col] = (
      <LabelContainer key={col}>
        {getColVals(solution, col).join("")}
      </LabelContainer>
    );
  }

  return <HorizontalContainer>{labels}</HorizontalContainer>;
};
