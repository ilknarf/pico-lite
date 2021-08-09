import * as React from "react";
import { BoardAction } from "components/nonogram-board";

export interface Props {
  dispatch: React.Dispatch<BoardAction>;
}

const Cell = (props: Props) => {
  return (
    <div />
  )
};

export const NonogramCell = React.memo<Props>(Cell);