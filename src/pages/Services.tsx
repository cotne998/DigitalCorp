import styled from "styled-components";
import { TitleSpan } from "./About";
import data from "../data.json";
import { useState } from "react";
import ArrowIcon from "/assets/icon-arrow.svg";
import { useNavigate } from "react-router-dom";
import { SlideLower, SlideText } from "../pages/About";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleQuestion = (index: number) => {
    setCurrentIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <TitleSpan>{data.services.name}</TitleSpan>
      <Container>
        <Questions>
          {data.services.questions.map((question, index) => {
            const isActive: boolean = currentIndex === index;

            return (
              <>
                <QuestionDiv
                  onClick={() => handleQuestion(index)}
                  style={{
                    borderBottom: isActive ? "" : "1px solid #94949454",
                  }}>
                  <h2 className="question-title">{question.title}</h2>
                  <Arrow
                    src={ArrowIcon}
                    style={{
                      transform: isActive
                        ? "rotate(180deg) translateY(-50%)"
                        : "",
                    }}
                  />
                </QuestionDiv>
                {isActive && (
                  <p className="services-textcontent">{question.textContent}</p>
                )}
              </>
            );
          })}
        </Questions>
        <LowerWrap>
          <img src={data.services.image} alt="services illustration" />
          <LowerSpan>
            დაინტერესდი? მაშინ{" "}
            <ContactUs onClick={() => navigate("/კონტაქტი")}>
              დაგვიკავშირდი
            </ContactUs>
          </LowerSpan>
        </LowerWrap>
      </Container>
    </>
  );
}

const Container = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (min-width: 48rem) {
    max-width: 75.7rem;
    margin: auto;
  }

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    max-width: 127.2rem;
    align-items: center;
    justify-content: space-between;
  }
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation-name: ${SlideText};
  animation-duration: 0.7s;

  @media only screen and (min-width: 48rem) {
    gap: 3.5rem;
  }

  @media only screen and (min-width: 90rem) {
    max-width: 66.7rem;
  }
`;

const QuestionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  cursor: pointer;

  @media only screen and (min-width: 90rem) {
    width: 66rem;
  }
`;

const Arrow = styled.img`
  transition: 0.2s;
`;

const LowerWrap = styled.div`
  display: flex;
  flex-direction: column;
  animation-name: ${SlideLower};
  animation-duration: 0.7s;
`;

const LowerSpan = styled.span`
  font-size: 1.2rem;
  text-align: center;

  @media only screen and (min-width: 90rem) {
    font-size: 1.6rem;
  }
`;

const ContactUs = styled.button`
  font-family: "BPG";
  color: white;
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
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

  @media only screen and (min-width: 90rem) {
    padding: 1.2rem 1.7rem;
    font-size: 1.6rem;
  }
`;
