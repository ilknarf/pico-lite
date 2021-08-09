import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Routes } from "./routes";
import { Header } from "./components/header";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/aileron";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    font-family: "Aileron", sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
