import * as React from "react";
import { CellState, Nonogram, NonogramSize } from "models/nonogram";
import { BoardAction,  NonogramBoard } from "components/nonogram-board";
import update from "immutability-helper";
import {
  updateCellState,
} from "util/nonogram";
import { useReducer } from "react";
import { BuilderCell } from "components/builder-cell";
import { CopyBar } from "components/copy-bar";
import { createNonogram, buildBoardLink } from "util/nonogram";
import { TextContainer } from "./styles";

export interface Props {
  size: NonogramSize;
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
      <TextContainer>
        <p>
          How to use: <br />
          1. Click on cells to create a picogram <br />
          2. Send the link to share!
        </p>
      </TextContainer>
      <CopyBar val={link} />
      </>
  );
};
