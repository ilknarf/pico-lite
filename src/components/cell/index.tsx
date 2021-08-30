import * as React from "react";
import { useCallback, useContext, useEffect, useRef } from "react";
import { CellState } from "models/nonogram";
import {
  BoardActionType,
  ClickHistory,
  MouseClickContext,
} from "components/nonogram-board";
import { createClickHistory } from "util/nonogram";
import { CellDiv } from "./styles";

export interface Props {
  cellState: CellState;
  onAction: (action: BoardActionType) => void;
}

interface BaseCellProps {
  cellState: CellState;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
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
  const [clickHistory, setClickHistory] = mouseClickContextState;

  // optimize event handlers with refs
  const clickHistoryRef = useRef<ClickHistory>();
  useEffect(() => {
    clickHistoryRef.current = clickHistory;
  }, [clickHistory]);

  const cellStateRef = useRef<CellState>(CellState.Empty);
  useEffect(() => {
    cellStateRef.current = props.cellState;
  }, [props.cellState]);

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const actionType =
      e.button === 0 ? BoardActionType.LeftClick : BoardActionType.RightClick;
    setClickHistory(createClickHistory(cellStateRef.current, actionType));
    props.onAction(actionType);
  }, []);

  // need to track click type in ClickHistory due to unreliability of MouseEvent.button for mouseenter
  // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
  const onMouseEnter = useCallback(() => {
    if (clickHistoryRef.current?.clickedCellState === cellStateRef.current) {
      props.onAction(clickHistoryRef.current?.actionType);
    }
  }, []);

  return (
    <BaseCell
      cellState={props.cellState}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
    />
  );
};
