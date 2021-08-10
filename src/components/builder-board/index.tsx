import * as React from "react";
import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { BoardAction, NonogramBoard } from "components/nonogram-board";
import update from "immutability-helper";
import {
  updateCellState,
} from "util/nonogram";
import { useReducer } from "react";
import { BuilderCell } from "components/builder-cell";
import { CopyBar } from "components/copy-bar";
import  {createNonogram, buildBoardLink } from "util/nonogram";

export interface Props {
  size: NonogramSize;
}

export enum BoardActionType {
  LeftClick,
}

// update to switch block if more actions added
const boardReducer = (state: Nonogram, action: BoardAction): Nonogram =>
  update(state, {
    data: {
      [action.location]: { $apply: (cellState) => updateCellState(cellState) },
    },
  });

export const BuilderBoard = (props: Props) => {
  const [board, boardDispatch] = useReducer<
    React.Reducer<Nonogram, BoardAction>
  >(boardReducer, createNonogram(props.size));
  const link = buildBoardLink(board);

  return (
    <>
      <NonogramBoard
        size={props.size}
        board={board}
        dispatch={boardDispatch}
        cellRender={(cellState: CellState, location: number) => (
          <BuilderCell
            cellState={cellState}
            location={location}
            key={location}
          />
        )}
      />
      <CopyBar val={link} />
      </>
  );
};
