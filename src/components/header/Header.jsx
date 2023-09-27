import { LogoIcon, MoonIcon, SearchIcon } from "../icons";
import styled from "styled-components";
import SwitchTheme from "../switchtheme/SwitchTheme";
import DropDownFont from "../dropdownfont/DropDownFont";
import { useContext, useState } from "react";
import { DictionaryContext } from "../../context/DictionaryProvider";

const HeaderContainer = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.bodyColor};
  transition: background 250ms ease-in-out;
`;

const Navbar = styled.nav`
  max-width: 768px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Divider = styled.hr`
  align-self: stretch;
  width: 2px;
  height: inherit;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  transition: border 250ms ease-in-out;
`;

const SearchContainer = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  gap: 1rem;
  outline-offset: 4px;
`;

const InputSearch = styled.input`
  border-radius: 0.5rem;
  padding: 0.75rem 3.1rem 0.75rem 1rem;
  border: none;
  width: 100%;
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  transition-property: background, color;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  outline-offset: 0.5rem;
  font-weight: bold;
  font-size: 1rem;

  &:focus {
    outline: ${({ theme }) => theme.primaryColor} solid 2px;
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  bottom: -2rem;
  left: 0;
  color: red;
  letter-spacing: 1px;
  font-size: smaller;
`;

export default function Header({ theme, themeToggler }) {
  const { queryInput, setQueryInput, setWord, dataWord, selectedFont } =
    useContext(DictionaryContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  const onChangeInput = (e) => {
    setQueryInput(e.target.value);

    if (e.target.value !== "") {
      setErrorMessage("");
    }

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      setWord(e.target.value);
    }, 1000);

    setTypingTimeout(newTimeout);
  };

  const onBlurInput = (e) => {
    if (e.target.value === "") {
      setErrorMessage("Please enter a word");
    }
  };

  return (
    <HeaderContainer style={{ fontFamily: `var(${selectedFont})` }}>
      <Navbar>
        <NavbarContent>
          <a href="/">
            <LogoIcon />
          </a>
          <NavbarContent>
            <DropDownFont />
            <Divider />
            <SwitchTheme
              checked={theme === "dark" ? true : false}
              onChange={() => themeToggler()}
            />
            <MoonIcon />
          </NavbarContent>
        </NavbarContent>
        <SearchContainer className="label-search" htmlFor="search-input">
          <SearchIcon />
          <InputSearch
            onBlur={onBlurInput}
            onChange={onChangeInput}
            value={queryInput}
            type="search"
            name="search-input"
            id="search-input"
            style={{
              outline:
                errorMessage || dataWord.message ? "red solid 2px" : null,
            }}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </SearchContainer>
      </Navbar>
    </HeaderContainer>
  );
}
