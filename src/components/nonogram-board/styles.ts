import styled from "styled-components";

interface BoardProps {
  sideLength: number;
}

export const Board = styled.div.attrs(({ sideLength }: BoardProps) => ({
  sideLength,
  sideVH: Math.min(sideLength * 10, 60),
}))`
  display: grid;
  width: ${(props) => props.sideVH}vh;
  height: ${(props) => props.sideVH}vh;
  gap: ${(props) => 15 / props.sideLength}%;
  grid-template-columns: repeat(${(props) => props.sideLength}, 1fr);
  background-color: ${(props) => props.theme.tertiary};
  padding: 1rem;
`;