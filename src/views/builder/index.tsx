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
import { TextContainer } from "components/text-container/styles";

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
      <TextContainer>
        <p>
          How to use: <br />
          1. Click on cells to create a nonogram (you can drag too!) <br />
          2. Send the link to share!
        </p>
      </TextContainer>
    </BuilderLayout>
  );
};
