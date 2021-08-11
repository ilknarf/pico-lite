import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${(props) => props.theme.tertiary};
  margin-bottom: 1rem;
`;

export const Link = styled(RouterLink)`
  color: ${(props) => props.theme.secondary};
  text-decoration-color: ${(props) => props.theme.secondary};

  :active {
    text-decoration-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 1rem 2rem;
`;

export const GithubText = styled(HeaderText)`
  margin-left: auto;
`;

export const GithubLink = styled.a`
  color: ${(props) => props.theme.info};
  text-decoration-color: ${(props) => props.theme.info};

  :active {
    text-decoration-color: ${(props) => props.theme.alert};
    color: ${(props) => props.theme.alert};
  }
`;
