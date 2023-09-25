import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import AppContainer from "./AppContainer";
import useDarkMode from "./hooks/useDarkMode";

export default function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <div className="app">
          <GlobalStyle />
          <AppContainer theme={theme} themeToggler={themeToggler} />
        </div>
      </ThemeProvider>
    </>
  );
}
