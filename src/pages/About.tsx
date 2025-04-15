import styled, { keyframes } from "styled-components";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const handleMore = () => {
    navigate("/სერვისები");
  };

  return (
    <>
      <TitleSpan>{data.about.name}</TitleSpan>
      <Container>
        <TextWrap>
          <h1 className="about-title">{data.about.title}</h1>
          <p className="about-textcontent">{data.about.textContent}</p>
        </TextWrap>
        <LowerWrap>
          <img
            className="about-illustration"
            src={data.about.image}
            alt="illustration"
          />
          <MoreButton onClick={handleMore}>გაიგე მეტი</MoreButton>
        </LowerWrap>
      </Container>
    </>
  );
}

export const SlideText = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SlideLower = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TitleSpan = styled.h4`
  width: 100%;
  font-size: 1.4rem;
  color: #0b6099;
  text-align: center;
  font-weight: 300;
  animation-name: ${SlideText};
  animation-duration: 0.7s;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation-name: ${SlideText};
  animation-duration: 0.7s;

  @media only screen and (min-width: 90rem) {
    max-width: 60.6rem;
  }
`;

const Container = styled.div`
  padding-top: 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media only screen and (min-width: 48rem) {
    max-width: 63rem;
    margin: auto;
    gap: 2.6rem;
  }

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    max-width: 124.6rem;
    justify-content: space-between;
    align-items: center;
  }
`;

const LowerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.3rem;
  animation-name: ${SlideLower};
  animation-duration: 0.7s;
`;

export const MoreButton = styled.button`
  font-family: "BPG";
  color: white;
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
  background-color: #0569ac;
  border: none;
  border-radius: 4rem;
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: #0569acad;
    box-shadow: 0px 0px 8px 2px #0569ac4c;
  }

  &:active {
    transition: 0.2s;
    box-shadow: unset;
    transform: scale(0.95);
    background-color: #004f84;
  }
`;
