import * as React from "react";
import { useState } from "react";
import { NonogramSize } from "models/nonogram";
import { BuilderBoard } from "components/builder-board";
import {
  BoardContainer,
  BuilderLayout,
  SelectButton,
  SelectButtonContainer,
} from "views/builder/styles";

export const Builder = () => {
  const [size, setSize] = useState(NonogramSize.Size5x5);

  const Board = () => <BuilderBoard size={size} />;

  return (
    <BuilderLayout>
      <BoardContainer>
        <Board />
      </BoardContainer>
      <SelectButtonContainer>
        <SelectButton
          onClick={() => setSize(NonogramSize.Size5x5)}
          selected={size === NonogramSize.Size5x5}
        >
          5x5
        </SelectButton>
        <SelectButton
          onClick={() => setSize(NonogramSize.Size10x10)}
          selected={size === NonogramSize.Size10x10}
        >
          10x10
        </SelectButton>
      </SelectButtonContainer>
    </BuilderLayout>
  );
};
