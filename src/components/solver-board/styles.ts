import styled from "styled-components";

export const SolverLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const SolverGrid = styled.div`
  display: grid;
  // extra column for better alignment
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr 6fr;
`;
