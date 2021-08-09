import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: ${(props) => props.theme.tertiary};
  margin-bottom: 1rem;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 1rem 2rem;
  user-select: none;
`;
