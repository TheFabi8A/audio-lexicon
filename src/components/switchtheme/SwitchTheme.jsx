import styled from "styled-components";

const SwitchContainer = styled.label`
  --size: 60px;
  --spacing: calc(var(--size) / 12);
  position: relative;
  width: var(--size);
  height: calc((var(--size) / 2) + (var(--spacing) / 2));
  background-color: ${({ theme }) => theme.colorSwitch};
  transition: background 250ms ease-in-out;
  border-radius: calc(var(--size) / 2);
  cursor: pointer;
`;

const SwitchLabel = styled.span`
  position: absolute;
  width: calc((var(--size) / 2) - (var(--spacing) * 1.5));
  height: calc((var(--size) / 2) - (var(--spacing) * 1.5));
  top: var(--spacing);
  left: var(--spacing);
  background-color: #fff;
  border-radius: calc(var(--size) / 2);
  transition: 0.4s;
`;

const SwitchCheckBox = styled.input`
  appearance: none;

  &:checked + ${SwitchLabel} {
    transform: translateX(calc((var(--size) / 2) - (var(--spacing) / 2)));
  }
`;

const SwitchTheme = (props) => {
  return (
    <SwitchContainer htmlFor="switch-theme">
      <SwitchCheckBox
        {...props}
        type="checkbox"
        name="switch-theme"
        id="switch-theme"
      />
      <SwitchLabel />
    </SwitchContainer>
  );
};

export default SwitchTheme;
