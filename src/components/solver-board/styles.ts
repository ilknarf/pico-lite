import styled from "styled-components";

export const SolverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SolverGrid = styled.div`
  display: grid;
  // extra column for better alignment
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr 4fr;
`;
