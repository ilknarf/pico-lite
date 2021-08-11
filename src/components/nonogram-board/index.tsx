import * as React from "react";
import { useState } from "react";
import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { getNonogramSideLength } from "util/nonogram";
import { Board } from "components/nonogram-board/styles";

export enum BoardActionType {
  LeftClick,
  RightClick,
}

export interface BoardAction {
  type: BoardActionType;
  location: number;
}

// create context with dispatch for cells to call
export const BoardDispatch = React.createContext<React.Dispatch<BoardAction>>(
  {} as React.Dispatch<BoardAction>
);

export interface ClickHistory {
  // so that only cells that are the same as the initially requested cell state are affected
  clickedCellState: CellState;
  actionType: BoardActionType;
}

// used to track the drag effect of the nonogram.
export const MouseClickContext = React.createContext<
  [
    ClickHistory | undefined,
    React.Dispatch<React.SetStateAction<ClickHistory | undefined>>
  ]
>([undefined, () => undefined]);

export interface Props {
  size: NonogramSize;
  board: Nonogram;
  cellRender: (cellState: CellState, location: number) => JSX.Element;
  dispatch: React.Dispatch<BoardAction>;
}

export const NonogramBoard = (props: Props) => {
  const clickHistoryState = useState<ClickHistory | undefined>(undefined);
  const [, setClickHistory] = clickHistoryState;
  const sideLength = getNonogramSideLength(props.size);
  const createCell = props.cellRender;

  const resetClickHistory = () => {
    setClickHistory(undefined);
  };

  return (
    <BoardDispatch.Provider value={props.dispatch}>
      <MouseClickContext.Provider value={clickHistoryState}>
        <Board
          sideLength={sideLength}
          onMouseLeave={resetClickHistory}
          onMouseUp={resetClickHistory}
          onContextMenu={(e) => e.preventDefault()}
        >
          {props.board.data.map(createCell)}
        </Board>
      </MouseClickContext.Provider>
    </BoardDispatch.Provider>
  );
};
