import * as React from "react";
import { useReducer } from "react";
import update from "immutability-helper";
import styled from "styled-components";
import { Nonogram, NonogramSize } from "models/nonogram";
import { getNonogramArrayLength, getNonogramSideLength } from "util/nonogram";
import "./nonogram-board.css";

const BoardProps = {

}

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.sideLength}, 1fr);
  
`;

enum BoardActionType {
  CellClick,
}

export interface BoardAction {
  type: BoardActionType;
  location: number;
}

const BoardDispatch = React.createContext<React.Dispatch<BoardAction>>({} as React.Dispatch<BoardAction>);

export interface Props {
  size: NonogramSize;
}

// update to switch block if more actions added
const boardReducer = (state: Nonogram, event: BoardAction): Nonogram => (
  update(state, { data: { [event.location]: (isFilled) => !isFilled } })
);

const createNonogram = (size: NonogramSize): Nonogram => {
  const arraySize = getNonogramArrayLength(size);

  return {
    size,
    data: new Array<boolean>(arraySize),
  };
};

export const NonogramBoard = (props: Props) => {
  const [board, boardDispatch] = useReducer<React.Reducer<Nonogram, BoardAction>, NonogramSize>(boardReducer, props.size, createNonogram);

  return (
    <div className="nonogram-board">
      <BoardDispatch.Provider value={boardDispatch}>

      </BoardDispatch.Provider>
    </div>
  );
};
