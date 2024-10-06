import styled, { keyframes } from 'styled-components';
import theme from "../../theme/theme.json";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const orbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
`;
const orbitMobileSize = keyframes`
  0% {
    transform: rotate(0deg) translateX(110px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(110px) rotate(-360deg);
  }
`;

export const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
  padding-top: 50px;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid ${theme.colors.secondary.main};
`;

export const MyInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    flex-direction: column;
    max-width: 80%;
  }
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    max-width: 95%;
  }
`;

export const Description = styled.div`
  max-width: 400px;
  text-align: center;
  font-size: ${theme.font.text.fontSize};
  line-height: 1.8;
  color:${theme.colors.neutral.darkGrey};
  & p {
    text-align: justify;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    max-width: 80%;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: ${theme.font.headings.h3.fontSize};
  color: ${theme.colors.secondary.main};
  text-transform: uppercase;
`;

export const TechnologyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 700px;
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    max-width: 80%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    max-width: 95%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

export const TechnologyItem = styled.li<{reduceFontSize?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.tertiary.dark};
  color: ${theme.colors.neutral.white};
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  font-size: ${({reduceFontSize}) => reduceFontSize ? `${theme.font.navText.fontSize}` :`${theme.font.tagText.fontSize}` };
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    padding: 5px;
  }
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: ${({reduceFontSize}) => reduceFontSize ? `12px` :`15px` };
    padding: 2px 5px;
  }
`;

export const FloatingCVButton = styled.a`
  position: absolute;
  top: 100px;
  right: 120px;
  background-color: ${theme.colors.secondary.main};
  border: 2px solid ${theme.colors.neutral.white};
  color: ${theme.colors.neutral.white};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${orbit} 10s linear infinite;
  z-index: 1000;
  
  &:hover {
    border: 2px solid ${theme.colors.neutral.black};
    color: ${theme.colors.neutral.black};
  }
  
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    top: 50px;
    right: 70px;
    animation: ${orbitMobileSize} 10s linear infinite;
  }
`;