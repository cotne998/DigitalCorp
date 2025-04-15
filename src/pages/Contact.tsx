import styled from "styled-components";
import { TitleSpan } from "./About";
import data from "../data.json";
import { SlideText } from "../pages/About";

export default function Contact() {
  return (
    <>
      <TitleSpan>{data.contact.name}</TitleSpan>
      <Container>
        <h1 className="contact-title">{data.contact.pageTitle}</h1>
        <CustomerSupport>
          <ContactSectionTitle>
            {data.contact.customerSupport.title}
          </ContactSectionTitle>
          <ContactInfoWrap>
            <img
              className="contact-icon"
              src={data.contact.customerSupport.email.emailIcon}
              alt="email icon"
            />
            <InfoWrap>
              <InfoTitle>Email Address</InfoTitle>
              <Info>{data.contact.customerSupport.email.email}</Info>
            </InfoWrap>
          </ContactInfoWrap>
          <ContactInfoWrap>
            <img
              className="contact-icon"
              src={data.contact.customerSupport.phone.phoneIcon}
              alt="phone icon"
            />
            <InfoWrap>
              <InfoTitle>Phone Number</InfoTitle>
              <Info>{data.contact.customerSupport.phone.phoneNumber}</Info>
            </InfoWrap>
          </ContactInfoWrap>
        </CustomerSupport>
        <SocialMedia>
          <ContactSectionTitle>სოციალური მედია</ContactSectionTitle>
          {data.contact.socialMedia.map((item) => {
            return (
              <ContactInfoWrap key={item.name}>
                <SocialMediaIcon src={item.icon} alt={item.name + " icon"} />
                <InfoWrap>
                  <InfoTitle>{item.title}</InfoTitle>
                  <Info style={{ color: item.color }}>{item.link}</Info>
                </InfoWrap>
              </ContactInfoWrap>
            );
          })}
        </SocialMedia>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  padding-top: 3rem;
  animation-name: ${SlideText};
  animation-duration: 0.7s;

  @media only screen and (min-width: 48rem) {
    max-width: 63.2rem;
    margin: auto;
  }
`;

const CustomerSupport = styled.section`
  background-color: white;
  padding: 2.1rem 2.6rem;
  border-radius: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactSectionTitle = styled.h3`
  color: #5b5b5b;
  font-size: 1.4rem;
  font-weight: 400;

  @media only screen and (min-width: 48rem) {
    font-size: 2.4rem;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const InfoTitle = styled.span`
  color: #9d9d9d;
  font-size: 1rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.4rem;
  }
`;

const Info = styled.span`
  color: #5b5b5b;
  font-size: 1.2rem;

  @media only screen and (min-width: 48rem) {
    font-size: 1.6rem;
  }
`;

const SocialMedia = styled.section`
  background-color: white;
  padding: 2.1rem 2.6rem;
  border-radius: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialMediaIcon = styled.img`
  width: 3rem;

  @media only screen and (min-width: 48rem) {
    width: 4.5rem;
  }
`;
