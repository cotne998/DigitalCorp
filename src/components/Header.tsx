import styled, { keyframes } from "styled-components";
import LogoImg from "/assets/DCBlue.png";
import HamburgerIcon from "/assets/icon-hamburger.png";
import { useState } from "react";
import CloseIcon from "/assets/icon-close.svg";
import { SlideLower, SlideText } from "../pages/About";

import { Link, useNavigate } from "react-router-dom";

const navigation: string[] = [
  "ჩვენ შესახებ",
  "სერვისები",
  "ნამუშევრები",
  "კონტაქტი",
];

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNav = (index: number) => {
    setCurrentIndex(index);
  };

  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <Logo
          onClick={() => navigate("/ჩვენ შესახებ")}
          src={LogoImg}
          alt="logo"
        />
        <Hamburger
          onClick={() => setDisplayMenu(true)}
          src={HamburgerIcon}
          alt="Menu"
        />

        <TabletNav>
          <TabletUl>
            {navigation.map((item, index) => {
              const isActive: boolean = index === currentIndex;

              return (
                <TabletLi
                  style={{
                    color: isActive ? "white" : "",
                    borderBottom: isActive ? "4px solid #0569AC" : "",
                    paddingBottom: "2rem",
                  }}
                  key={index}>
                  <Link
                    onClick={() => handleNav(index)}
                    style={{ all: "unset", cursor: "pointer" }}
                    to={item}>
                    {item}
                  </Link>
                </TabletLi>
              );
            })}
          </TabletUl>
        </TabletNav>
      </HeaderContainer>
      {displayMenu && (
        <MobileNav>
          <Close onClick={() => setDisplayMenu(false)} src={CloseIcon} />
          <MobileUl>
            {navigation.map((item) => {
              return (
                <MobileLi>
                  <Link
                    onClick={() => setDisplayMenu(false)}
                    style={{ all: "unset", cursor: "pointer" }}
                    to={item}>
                    {item}
                  </Link>
                </MobileLi>
              );
            })}
          </MobileUl>
        </MobileNav>
      )}
    </>
  );
}

const HeaderContainer = styled.header`
  background-color: #2e2e2e;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;

  @media only screen and (min-width: 48rem) {
    padding: 3rem;
    padding-bottom: 0.1rem;
  }

  @media only screen and (min-width: 90rem) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

const Logo = styled.img`
  width: 16rem;
  cursor: pointer;
  animation-name: ${SlideText};
  animation-duration: 0.7s;

  @media only screen and (min-width: 48rem) {
    width: 20.2rem;
    padding-bottom: 3rem;
  }
`;

const Hamburger = styled.img`
  cursor: pointer;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const MenuAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const MobileNav = styled.nav`
  height: 100%;
  width: 22.4rem;
  background-color: #252525;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: white;

  animation-name: ${MenuAnimation};
  animation-duration: 0.2s;
`;

const Close = styled.img`
  width: 1.7rem;
  position: absolute;
  right: 2.5rem;
  top: 2.5rem;
`;

const MobileLi = styled.li`
  all: unset;
  font-size: 1.4rem;
`;

const MobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-top: 10.8rem;
`;

const TabletNav = styled.nav`
  display: none;

  @media only screen and (min-width: 48rem) {
    display: block;
    gap: 2.8rem;
    animation-name: ${SlideLower};
    animation-duration: 0.7s;
  }
`;

const TabletUl = styled.ul`
  @media only screen and (min-width: 48rem) {
    display: flex;
    gap: 2.8rem;
  }
`;

const TabletLi = styled.li`
  all: unset;
  color: #ffffff91;
  font-size: 1.4rem;
  font-weight: normal;
`;
