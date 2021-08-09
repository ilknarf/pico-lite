import { CellState } from "models/nonogram";
import styled from "styled-components";

interface CellDivProps {
  cellState: CellState;
}

export const CellDiv = styled.div<CellDivProps>`
  background-color: ${(props) =>
    props.cellState === CellState.Empty
      ? props.theme.primary
      : props.theme.secondary};
  transition: ease-in 0.12s;
  :hover {
    transform: scale(1.05);
  }
`;
