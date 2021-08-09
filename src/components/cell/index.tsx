import * as React from "react";
import { useContext } from "react";
import { CellState } from "models/nonogram";
import { MouseClickContext } from "components/nonogram-board";
import { createClickHistory } from "util/nonogram";
import { CellDiv } from "./styles";

export interface Props {
  cellState: CellState;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
}

interface BaseCellProps extends Props {
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
}

const BaseCell = (props: BaseCellProps) => {
  return (
    <CellDiv
      cellState={props.cellState}
      onMouseDown={props.onMouseDown}
      onMouseEnter={props.onMouseEnter}
    />
  );
};

export const Cell = (props: Props) => {
  const mouseClickContextState = useContext(MouseClickContext);
  if (!mouseClickContextState) {
    return (
      <BaseCell cellState={props.cellState} onMouseDown={props.onMouseDown} />
    );
  }

  const [clickHistory, setClickHistory] = mouseClickContextState;

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setClickHistory(createClickHistory(props.cellState));
    props.onMouseDown(e);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (clickHistory?.clickedCellState === props.cellState) {
      props.onMouseDown(e);
    }
  };

  return (
    <BaseCell
      cellState={props.cellState}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
    />
  );
};
