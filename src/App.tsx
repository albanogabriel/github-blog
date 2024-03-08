import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from './Router'
import { darkTheme } from "./styles/themes/darkTheme";
import { GlobalStyle } from "./styles/global";
import { IssuesContextProvider } from "./contexts/issuesContext";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <IssuesContextProvider>
          <Router />
        </IssuesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}