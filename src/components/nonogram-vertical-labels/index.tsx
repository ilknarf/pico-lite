import * as React from "react";
import { CellState, Nonogram } from "models/nonogram";
import { getNonogramSideLength } from "util/nonogram";
import { LabelContainer, VerticalContainer } from "./styles";

export interface Props {
  solution: Nonogram;
}

const getRowVals = (board: Nonogram, row: number) => {
  const rowLength = getNonogramSideLength(board.size);
  const rowVals: number[] = [];

  let consecutiveCells = 0;

  for (let i = 0; i < rowLength; i++) {
    const location = i + row * rowLength;
    if (board.data[location] === CellState.Filled) {
      consecutiveCells++;
    } else if (consecutiveCells !== 0) {
      rowVals.push(consecutiveCells);
      consecutiveCells = 0;
    }
  }

  // handle end case
  if (consecutiveCells !== 0) {
    rowVals.push(consecutiveCells);
  }

  // handle empty case
  if (rowVals.length == 0) {
    rowVals.push(0);
  }

  return rowVals;
};

export const NonogramVerticalLabels = ({ solution }: Props) => {
  const rowLength = getNonogramSideLength(solution.size);
  const labels = Array<JSX.Element>(rowLength);

  for (let row = 0; row < rowLength; row++) {
    labels[row] = (
      <LabelContainer key={row}>
        {getRowVals(solution, row).join(" ")}
      </LabelContainer>
    );
  }

  return (
    <VerticalContainer>
      {labels}
    </VerticalContainer>
  )
};
