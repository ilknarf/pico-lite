import * as React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: ${(props) => props.theme.tertiary};
  margin-bottom: 1rem;
`;

const HeaderText = styled.h1`
  margin: 0;
  padding: 1rem 2rem;
`;

export const Header = () => (
  <HeaderDiv>
    <HeaderText>Picto-Chat</HeaderText>
  </HeaderDiv>
);
