import * as React from "react";
import { useEffect, useReducer } from "react";
import { createNonogram, updateCellState } from "util/nonogram";
import { CellState, Nonogram } from "models/nonogram";
import { BoardAction, NonogramBoard } from "components/nonogram-board";
import update from "immutability-helper";
import { BuilderCell } from "components/builder-cell";
import { SolverLayout } from "./styles";

export interface Props {
  solution: Nonogram;
  onSolve: () => void;
}

// update to switch block if more actions added
const boardReducer = (state: Nonogram, action: BoardAction): Nonogram => (
  update(state, {
      data: {
        [action.location]: {$apply: (cellState) => updateCellState(cellState)},
      },
    })
);

export const SolverBoard = (props: Props) => {
  const nonogramSize = props.solution.size;
  const [board, boardDispatch] = useReducer<
    React.Reducer<Nonogram, BoardAction>
    >(boardReducer, createNonogram(nonogramSize));

  useEffect(() => {
    if (props.solution.data.every((cellState, i) => cellState == board.data[i])) {
      props.onSolve();
    }
  }, [props.solution, board]);

  return (
    <SolverLayout>
      <NonogramBoard
        size={nonogramSize}
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
    </SolverLayout>
  );
};