import * as React from "react";
import { useEffect, useReducer } from "react";
import { createNonogram, updateCellState } from "util/nonogram";
import { boardEqual } from "util/solver";
import { CellState, Nonogram } from "models/nonogram";
import { BoardAction, NonogramBoard } from "components/nonogram-board";
import update from "immutability-helper";
import { SolverCell } from "components/solver-cell";
import { SolverGrid, SolverLayout } from "./styles";
import { NonogramVerticalLabels } from "components/nonogram-vertical-labels";

export interface Props {
  solution: Nonogram;
  onSolve: () => void;
}

// update to switch block if more actions added
const boardReducer = (state: Nonogram, action: BoardAction): Nonogram => (
  update(state, {
      data: {
        [action.location]: {$apply: (cellState) => updateCellState(cellState, action.type)},
      },
    })
);

export const SolverBoard = (props: Props) => {
  const nonogramSize = props.solution.size;
  const [board, boardDispatch] = useReducer<
    React.Reducer<Nonogram, BoardAction>
    >(boardReducer, createNonogram(nonogramSize));

  useEffect(() => {
    if (boardEqual(props.solution, board)) {
      props.onSolve();
    }

  }, [props.solution, board]);

  return (
    <SolverLayout>
      <SolverGrid>
        <NonogramVerticalLabels solution={props.solution}/>
        <NonogramBoard
          size={nonogramSize}
          board={board}
          dispatch={boardDispatch}
          cellRender={(cellState: CellState, location: number) => (
            <SolverCell
              cellState={cellState}
              location={location}
              key={location}
            />
          )}
        />
      </SolverGrid>
    </SolverLayout>
  );
};