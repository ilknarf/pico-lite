import styled from "styled-components";

export const SolverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SolverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

interface SolvedBannerProps {
  solved: boolean;
}

export const SolvedBanner = styled.div<SolvedBannerProps>`
  grid-row: 1/4;
  grid-column: 4/6;

  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  z-index: -1;

  border-radius: 4vh;
  // hide from left edge
  background-color: ${(props) => props.theme.success};

  transition: transform linear 0.4s;
  ${(props) =>
    props.solved ? "transform: translateX(50%)" : "transform: translateX(0%);"}
`;

export const SolvedText = styled.p`
  writing-mode: vertical-rl;
  font-size: 10vh;
  color: ${(props) => props.theme.primary};
  margin: 0 1.5vh;
  user-select: none;
`;
