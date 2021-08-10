import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { ClickHistory } from "components/nonogram-board";
import { boardToString } from "util/builder";

export const createNonogram = (size: NonogramSize): Nonogram => {
  const arraySize = getNonogramArrayLength(size);

  return {
    size,
    data: new Array<CellState>(arraySize).fill(CellState.Empty),
  };
};

export const getNonogramSideLength = (size: NonogramSize): number => {
  switch (size) {
    case NonogramSize.Size5x5:
      return 5;
    case NonogramSize.Size10x10:
      return 10;
  }
};

export const getNonogramSize = (size: string) => {
  switch(size) {
    case "5x5":
      return NonogramSize.Size5x5;
    case "10x10":
      return NonogramSize.Size10x10;
    default:
      return NonogramSize.Size5x5;
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
