import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { BoardActionType, ClickHistory } from "components/nonogram-board";
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
  switch (size) {
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

export const updateCellState = (
  cellState: CellState,
  action: BoardActionType = BoardActionType.LeftClick
): CellState => {
  // handle right click
  if (action === BoardActionType.RightClick) {
    return cellState === CellState.Empty ? CellState.None : CellState.Empty;
  }

  // handle left click
  return cellState === CellState.Empty ? CellState.Filled : CellState.Empty;
};

// click history for more intuitive drag effect.
export const createClickHistory = (
  cellstate: CellState,
  action: BoardActionType = BoardActionType.LeftClick
): ClickHistory => ({
  clickedCellState: cellstate,
  actionType: action,
});

export const buildBoardLink = (board: Nonogram): string => {
  const size = getNonogramSideLength(board.size);
  const baseURL = window.location.hostname + process.env.PUBLIC_URL;
  return `${baseURL}/${size}x${size}/${boardToString(board)}`;
};
