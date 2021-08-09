import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "themes";
import { Routes } from "./routes";
import { Header } from "./components/header";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/aileron";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Header />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
