import Header from "./components/header/Header";

export default function AppContainer({ theme, themeToggler }) {
  return <Header theme={theme} themeToggler={themeToggler} />;
}
