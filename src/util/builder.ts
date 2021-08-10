import { BoardActionType } from "components/nonogram-board";
import { BoardAction } from "components/nonogram-board";
import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { getNonogramArrayLength } from "util/nonogram";

export const createBoardAction = (location: number, type: BoardActionType = BoardActionType.LeftClick): BoardAction => ({
  type,
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

// catches in parsing error, replaces with 0
const parseBigInt = (str: string) => {
  try {
    return BigInt(str);
  } catch (err) {
    return BigInt(0);
  }
};

// converts hex string to board state, empty on BigInt parse error
export const stringToBoard = (str: string, size: NonogramSize): Nonogram => {
  const arrayLength = getNonogramArrayLength(size);

  return {
    size,
    data: parseBigInt(`0x${str}`)
      .toString(2)
      .padStart(arrayLength, "0")
      .split("")
      .map((v) => (v === "1" ? CellState.Filled : CellState.Empty)),
  };
};
