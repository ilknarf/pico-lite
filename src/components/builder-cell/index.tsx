import * as React from "react";
import { useContext } from "react";
import { CellState } from "models/nonogram";
import { BoardDispatch } from "components/builder-board";
import { createBoardAction } from "util/builder";
import { Cell } from "components/cell";

export interface Props {
  cellState: CellState;
  location: number;
}

export const BuilderCell = (props: Props) => {
  const boardDispatch = useContext(BoardDispatch);
  const handleClick = () => {
    boardDispatch(createBoardAction(props.location));
  };

  return <Cell cellState={props.cellState} onMouseDown={handleClick} />;
};
