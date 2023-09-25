import { LogoIcon, MoonIcon } from "../icons";
import styled from "styled-components";
import SwitchTheme from "../switchtheme/SwitchTheme";
import DropDownFont from "../dropdownfont/DropDownFont";

const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  height: max-content;
`;

const Navbar = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  min-height: max-content;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Divider = styled.span`
  align-self: stretch;
  width: 1px;
  height: inherit;
  background-color: ${({ theme }) => theme.textColorInverted};
  transition: background 250ms ease-in-out;
`;

export default function Header({ theme, themeToggler }) {
  return (
    <HeaderContainer>
      <Navbar>
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
      </Navbar>
    </HeaderContainer>
  );
}
