import { useState } from "react";
import styled from "styled-components";
import { ArrowDownIcon } from "../icons";

const DropDown = styled.div`
  position: relative;
`;

const DropDownTrigger = styled.button`
  padding: 0.5rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.textColor};
  transition: color 250ms ease-in-out;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const DropDownMenu = styled.ul`
  position: absolute;
  right: 0;
  list-style: none;
  padding: 0;
  outline: 1.5px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0.25rem;
  overflow: hidden;
`;

const DropDownItem = styled.button`
  padding: 0.5rem;
  border: none;
  font-size: medium;
  display: block;
  color: ${({ theme }) => theme.textColor};
  background: transparent;
  padding: 0.5rem 1rem;
  width: 100%;
  transition: background 250ms ease-in-out, color 250ms ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

const DropDownFont = () => {
  const [text, setText] = useState("Serif");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTrigger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <>
      <DropDown>
        <DropDownTrigger
          title={`${isMenuOpen ? "Ocultar" : "Mostrar"} opciones de fuente`}
          onClick={handleTrigger}>
          {text}
          <ArrowDownIcon />
        </DropDownTrigger>
        {isMenuOpen && (
          <DropDownMenu title="Opciones de cambio de fuente">
            <li>
              <DropDownItem onClick={() => setText("Serif")}>
                Serif
              </DropDownItem>
            </li>
            <li>
              <DropDownItem onClick={() => setText("Sans Serif")}>
                Sans Serif
              </DropDownItem>
            </li>
            <li>
              <DropDownItem onClick={() => setText("Monospace")}>
                Monospace
              </DropDownItem>
            </li>
          </DropDownMenu>
        )}
      </DropDown>
    </>
  );
};

export default DropDownFont;
