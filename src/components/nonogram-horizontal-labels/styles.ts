import styled from "styled-components";

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 1.5vh;
  
  grid-column: 2;
  grid-row: 1;
`;

export const LabelContainer = styled.div`
  font-size: 2.5vh;
  text-wrap: none;
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: ${(props) => props.theme.secondary};
  margin-bottom: 1vh;
  user-select: none;
`;