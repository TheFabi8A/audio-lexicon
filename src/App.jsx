import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import useDarkMode from "./hooks/useDarkMode";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <div className="app">
          <GlobalStyle />
          <Header theme={theme} themeToggler={themeToggler} />
          <Main />
        </div>
      </ThemeProvider>
    </>
  );
}
