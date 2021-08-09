import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { NonogramSize } from "models/nonogram";
import { BuilderBoard } from "components/builder-board";

const BuilderLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100%;
  margin: 2rem;
`;

interface SelectButtonProps {
  selected: boolean;
}

const SelectButton = styled.div<SelectButtonProps>`
  color: ${(props) =>
    props.selected ? props.theme.primary : props.theme.secondary};
  background-color: ${(props) =>
    props.selected ? props.theme.secondary : props.theme.primary};
  padding: 1rem 0rem;
  transition: ease-in 0.3s;
  font-size: 1rem;
  text-align: center;
  width: 4rem;
  user-select: none;
  cursor: ${(props) => (props.selected ? "default" : "pointer")};
`;

const SelectButtonContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-color: ${(props) => props.theme.tertiary};
  border: solid;
`;

export const Builder = () => {
  const [size, setSize] = useState(NonogramSize.Size5x5);

  const Board = () => <BuilderBoard size={size} />;

  return (
    <BuilderLayout>
      <Board />
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
