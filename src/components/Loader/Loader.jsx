import styled from "styled-components";

const LoaderContainer = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 10px;

  & div {
    width: 8%;
    height: 24%;
    background: rgb(128, 128, 128);
    position: absolute;
    left: 50%;
    top: 30%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: fade458 1s linear infinite;
  }

  @keyframes fade458 {
    from {
      opacity: 1;
    }

    to {
      opacity: 0.25;
    }
  }

  & .bar1 {
    transform: rotate(0deg) translate(0, -130%);
    animation-delay: 0s;
  }

  & .bar2 {
    transform: rotate(30deg) translate(0, -130%);
    animation-delay: -1.1s;
  }

  & .bar3 {
    transform: rotate(60deg) translate(0, -130%);
    animation-delay: -1s;
  }

  & .bar4 {
    transform: rotate(90deg) translate(0, -130%);
    animation-delay: -0.9s;
  }

  & .bar5 {
    transform: rotate(120deg) translate(0, -130%);
    animation-delay: -0.8s;
  }

  & .bar6 {
    transform: rotate(150deg) translate(0, -130%);
    animation-delay: -0.7s;
  }

  & .bar7 {
    transform: rotate(180deg) translate(0, -130%);
    animation-delay: -0.6s;
  }

  & .bar8 {
    transform: rotate(210deg) translate(0, -130%);
    animation-delay: -0.5s;
  }

  & .bar9 {
    transform: rotate(240deg) translate(0, -130%);
    animation-delay: -0.4s;
  }

  & .bar10 {
    transform: rotate(270deg) translate(0, -130%);
    animation-delay: -0.3s;
  }

  & .bar11 {
    transform: rotate(300deg) translate(0, -130%);
    animation-delay: -0.2s;
  }

  & .bar12 {
    transform: rotate(330deg) translate(0, -130%);
    animation-delay: -0.1s;
  }
`;

export default function Loader() {
  return (
    <LoaderContainer className="loader">
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
      <div className="bar4" />
      <div className="bar5" />
      <div className="bar6" />
      <div className="bar7" />
      <div className="bar8" />
      <div className="bar9" />
      <div className="bar10" />
      <div className="bar11" />
      <div className="bar12" />
    </LoaderContainer>
  );
}
