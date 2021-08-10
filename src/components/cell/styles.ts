import { CellState } from "models/nonogram";
import styled from "styled-components";

interface CellDivProps {
  cellState: CellState;
}

export const CellDiv = styled.div<CellDivProps>`
  background-color: ${(props) => {
    switch(props.cellState) {
      case CellState.Empty:
        return props.theme.primary;
      case CellState.None:
        return props.theme.alert;
      case CellState.Filled:
        return props.theme.secondary;
      default:
        return props.theme.primary;
    }
  }};
  
  transition: ease-in 0.12s;
  :hover {
    transform: scale(1.05);
  }
`;
