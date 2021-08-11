import styled from "styled-components";

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0.5vh 1.5vh;
  
  grid-column: 2/6;
  grid-row: 4;
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