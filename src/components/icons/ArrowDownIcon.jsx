import styled from "styled-components";

const Path = styled.path`
  stroke: ${({ theme }) => theme.colorPrimary};
`;

const Svg = styled.svg`
  transition: transform 150ms ease-in-out;
`;

export const ArrowDownIcon = (props) => {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8">
      <Path fill="none" stroke="#A445ED" strokeWidth="1.5" d="m1 1 6 6 6-6" />
    </Svg>
  );
};
