import { CellState, Nonogram } from "models/nonogram";

const cellValid = (c1: CellState, c2: CellState) => {
  if (c1 !== c2) {
    return c1 !== CellState.Filled && c2 !== CellState.Filled;
  }

  return true;
};

export const boardEqual = (b1: Nonogram, b2: Nonogram): boolean => {
  if (b1.data.length !== b2.data.length) {
    return false;
  }

  for (let i = 0; i < b1.data.length; i++) {
    const cell1 = b1.data[i];
    const cell2 = b2.data[i];
    if (!cellValid(cell1, cell2)) {
      return false;
    }
  }

  return true;
};
