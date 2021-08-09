import { BoardAction, BoardActionType } from "components/builder-board";
import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { getNonogramArrayLength } from "util/nonogram";

export const createBoardAction = (location: number): BoardAction => ({
  type: BoardActionType.CellClick,
  location,
});

const cellToString = (cellState: CellState): string =>
  cellState === CellState.Filled ? "1" : "0";

// converts board state to hex string
export const boardToString = (board: Nonogram): string =>
  BigInt(
    board.data.reduce<string>(
      (acc: string, cellState) => acc + cellToString(cellState),
      "0b"
    )
  ).toString(16);

// converts hex string to board state
export const stringToBoard = (str: string, size: NonogramSize): Nonogram => {
  const arrayLength = getNonogramArrayLength(size);

  return {
    size,
    data: BigInt(`0x${str}`)
      .toString(2)
      .slice(arrayLength)
      .padStart(arrayLength, "0")
      .split("")
      .map((v) => (v === "1" ? CellState.Filled : CellState.Empty)),
  };
};
