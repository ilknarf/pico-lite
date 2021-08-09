import * as React from "react";
import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { NonogramBoard } from "components/nonogram-board";
import update from "immutability-helper";
import { getNonogramArrayLength, updateCellState } from "util/nonogram";
import { useReducer } from "react";
import { BuilderCell } from "components/builder-cell";
import { CopyBar } from "components/copy-bar";

export interface Props {
  size: NonogramSize;
}

export enum BoardActionType {
  CellClick,
}

export interface BoardAction {
  type: BoardActionType;
  location: number;
}

// update to switch block if more actions added
const boardReducer = (state: Nonogram, action: BoardAction): Nonogram =>
  update(state, {
    data: {
      [action.location]: { $apply: (cellState) => updateCellState(cellState) },
    },
  });

const createNonogram = (size: NonogramSize): Nonogram => {
  const arraySize = getNonogramArrayLength(size);

  return {
    size,
    data: new Array<CellState>(arraySize).fill(CellState.Empty),
  };
};

// create context with dispatch for cells to call
export const BoardDispatch = React.createContext<React.Dispatch<BoardAction>>(
  {} as React.Dispatch<BoardAction>
);

export const BuilderBoard = (props: Props) => {
  const [board, boardDispatch] = useReducer<React.Reducer<Nonogram, BoardAction>>(boardReducer, createNonogram(props.size));

  return (
    <BoardDispatch.Provider value={boardDispatch}>
      <NonogramBoard
        size={props.size}
        board={board}
        cellRender={(cellState: CellState, location: number) => (
          <BuilderCell
            cellState={cellState}
            location={location}
            key={location}
          />
        )}
      />
      <CopyBar val={"hello"}/>
    </BoardDispatch.Provider>
  );
};
