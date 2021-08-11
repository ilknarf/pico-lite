import * as React from "react";
import { useEffect, useReducer, useState } from "react";
import { createNonogram, updateCellState } from "util/nonogram";
import { boardEqual } from "util/solver";
import { CellState, Nonogram } from "models/nonogram";
import { BoardAction, NonogramBoard } from "components/nonogram-board";
import update from "immutability-helper";
import { SolverCell } from "components/solver-cell";
import { NonogramVerticalLabels } from "components/nonogram-vertical-labels";
import { NonogramHorizontalLabels } from "components/nonogram-horizontal-labels";
import { SolvedBanner, SolvedText, SolverGrid, SolverContainer } from "./styles";

export interface Props {
  solution: Nonogram;
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
  const [solved, setSolved] = useState(false);
  const [board, boardDispatch] = useReducer<
    React.Reducer<Nonogram, BoardAction>
    >(boardReducer, createNonogram(nonogramSize));

  useEffect(() => {
    if (boardEqual(props.solution, board)) {
      setSolved(true)
    }

  }, [props.solution, board]);

  return (
    <SolverContainer>
      <SolverGrid>
        <NonogramVerticalLabels solution={props.solution}/>
        <NonogramHorizontalLabels solution={props.solution} />
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
        <SolvedBanner solved={solved}>
          <SolvedText>
            {/* don't render hidden text */}
            {solved && "Solved!"}
          </SolvedText>
        </SolvedBanner>
      </SolverGrid>
    </SolverContainer>
  );
};