import * as React from "react";
import { useContext } from "react";
import { CellState } from "models/nonogram";
import { BoardDispatch } from "components/nonogram-board";
import { createBoardAction } from "util/builder";
import { Cell } from "components/cell";
import { BoardActionType } from "components/nonogram-board";

export interface Props {
  cellState: CellState;
  location: number;
}

export const SolverCell = (props: Props) => {
  const boardDispatch = useContext(BoardDispatch);
  const onAction = (e: BoardActionType) => {
    boardDispatch(createBoardAction(props.location, e));
  };

  return <Cell cellState={props.cellState} onAction={onAction} />;
};
