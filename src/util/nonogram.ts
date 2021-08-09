import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { ClickHistory } from "components/nonogram-board";
import { boardToString } from "util/builder";

export const getNonogramSideLength = (size: NonogramSize): number => {
  switch (size) {
    case NonogramSize.Size5x5:
      return 5;
    case NonogramSize.Size10x10:
      return 10;
  }
};

export const getNonogramArrayLength = (size: NonogramSize): number => {
  const sideLength = getNonogramSideLength(size);

  return sideLength * sideLength;
};

export const updateCellState = (cellState: CellState): CellState => {
  switch (cellState) {
    case CellState.Empty:
      return CellState.Filled;
    default:
      return CellState.Empty;
  }
};

export const createClickHistory = (cellstate: CellState): ClickHistory => ({
  clickedCellState: cellstate,
});

export const buildBoardLink = (board: Nonogram): string => {
  const size = getNonogramSideLength(board.size);
  return `${window.location.origin}/${size}x${size}/${boardToString(board)}`;
};
