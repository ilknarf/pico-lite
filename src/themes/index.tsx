import * as React from "react";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    font-display: block;
    font-family: "Roboto", sans-serif;
  }
`;

// haha you got me I'll fine tune the colors sometime, maybe add theming ^_^
const theme = {
  primary: "white",
  secondary: "black",
  tertiary: "gainsboro",
  alert: "red",
};

export interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = (props: Props) => (
  <>
    <GlobalStyle />
    <StyledThemeProvider theme={theme} {...props} />
  </>
);
