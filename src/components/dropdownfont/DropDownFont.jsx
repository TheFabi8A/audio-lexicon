import { useContext, useState } from "react";
import styled from "styled-components";
import { ArrowDownIcon } from "../icons";
import { DictionaryContext } from "../../context/DictionaryProvider";

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
  display: block;
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.bodyColor};
  transition: background 250ms ease-in-out, transform 150ms ease-in-out;
  transform-origin: top right;
  top: 3.5rem;
  right: 0;
  list-style: none;
  padding: 0;
  outline: 1.5px solid ${({ theme }) => theme.primaryColor};
  border-radius: 0.25rem;
  overflow: hidden;
  width: max-content;
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
    color: white;
  }
`;

const DropDownFont = () => {
  const { selectedFont, setFont } = useContext(DictionaryContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTrigger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFontChange = (font) => {
    setFont(font);
    setIsMenuOpen(false);
  };

  return (
    <>
      <DropDown>
        <DropDownTrigger
          title={`${isMenuOpen ? "Hidde" : "View"} font family menu`}
          onClick={handleTrigger}>
          {selectedFont === "--font-family-lora" && "Serif"}
          {selectedFont === "--font-family-inter" && "Sans Serif"}
          {selectedFont === "--font-family-inconsolata" && "Monospace"}
          <ArrowDownIcon
            style={
              isMenuOpen
                ? { transform: "rotate(90deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </DropDownTrigger>
        <DropDownMenu
          title="Change font family"
          style={
            isMenuOpen ? { transform: "scale(1)" } : { transform: "scale(0)" }
          }>
          <li>
            <DropDownItem
              title="Change font family to Serif"
              style={{ fontFamily: "Lora Regular" }}
              value="Serif"
              onClick={() => handleFontChange("--font-family-lora")}>
              Serif
            </DropDownItem>
          </li>
          <li>
            <DropDownItem
              title="Change font to Sans Serif"
              style={{ fontFamily: "Inter Regular" }}
              value="Sans Serif"
              onClick={() => handleFontChange("--font-family-inter")}>
              Sans Serif
            </DropDownItem>
          </li>
          <li>
            <DropDownItem
              title="Change font to Monospace"
              style={{ fontFamily: "Inconsolata Regular" }}
              value="Monospace"
              onClick={() => handleFontChange("--font-family-inconsolata")}>
              Monospace
            </DropDownItem>
          </li>
        </DropDownMenu>
      </DropDown>
    </>
  );
};

export default DropDownFont;
