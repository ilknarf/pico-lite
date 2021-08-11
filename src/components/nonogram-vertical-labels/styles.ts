import styled from "styled-components";

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 1.5vh 0.5vh;
  margin: 0 1vh;
  
  grid-column: 1;
  grid-row: 1/4;
`;

export const LabelContainer = styled.div`
  font-size: 2.5vh;
  text-wrap: none;
  color: ${(props) => props.theme.secondary};
  margin-right: 1vh;
  user-select: none;
`;
