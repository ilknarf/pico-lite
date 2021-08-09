import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { getNonogramSideLength } from "util/nonogram";

export interface ClickHistory {
  // so that only cells that are the same as the initially requested cell state are affected
  clickedCellState: CellState;
}

// used to track the drag effect of the nonogram.
export const MouseClickContext = React.createContext<
  | [
      ClickHistory | undefined,
      React.Dispatch<React.SetStateAction<ClickHistory | undefined>>
    ]
  | undefined
>(undefined);

interface BoardProps {
  sideLength: number;
}

const Board = styled.div.attrs(({ sideLength }: BoardProps) => ({
  sideLength,
  sideVH: Math.min(sideLength * 10, 60),
}))`
  display: grid;
  width: ${(props) => props.sideVH}vh;
  height: ${(props) => props.sideVH}vh;
  gap: ${(props) => 15 / props.sideLength}%;
  grid-template-columns: repeat(${(props) => props.sideLength}, 1fr);
  background-color: ${(props) => props.theme.tertiary};
  padding: 1rem;
  margin-top: 5vh;
  margin-bottom: 2.5vh;
  border-radius: 1rem;
`;

export interface Props {
  size: NonogramSize;
  board: Nonogram;
  cellRender: (cellState: CellState, location: number) => JSX.Element;
}

export const NonogramBoard = (props: Props) => {
  const clickHistoryState = useState<ClickHistory | undefined>(undefined);
  const setClickHistory = clickHistoryState[1];
  const sideLength = getNonogramSideLength(props.size);
  const createCell = props.cellRender;

  const resetClickHistory = () => {
    setClickHistory(undefined);
  };

  return (
    <MouseClickContext.Provider value={clickHistoryState}>
      <Board
        sideLength={sideLength}
        onMouseLeave={resetClickHistory}
        onMouseUp={resetClickHistory}
      >
        {props.board.data.map(createCell)}
      </Board>
    </MouseClickContext.Provider>
  );
};
