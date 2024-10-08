import styled, { keyframes } from 'styled-components';
import theme from "../../theme/theme.json"

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  0% {
    border-right-color: rgba(0, 0, 0, 0.75);
  }
  50% {
    border-right-color: transparent;
  }
  100% {
    border-right-color: rgba(0, 0, 0, 0.75);
  }
`;

export const HomeSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: calc(100vh - 85vh);
  @media (max-width: ${theme.responsive.laptops}) {
    padding-top: calc(100vh - 80vh);
  }
`;

export const TitleContainer = styled.div`
  margin-left: -150px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  z-index: 1;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    margin-left: 0;
    margin-top: 120px;
  }
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    margin-left: 0;
  }
`
export const NormalText = styled.span`
  margin: 0;
  padding-left: 10px;
  display: block;
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1;
  color: ${theme.colors.neutral.darkGrey};
  animation: ${fadeInUp} 1.2s ease-out forwards;

  @media (max-width: ${theme.responsive.laptops}) {
    font-size: 2rem;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 1.5rem;
  }
`;

export const FirstBigText = styled.span`
  margin: 0;
  font-size: 12rem;
  font-weight: bolder;
  color: ${theme.colors.neutral.white};
  line-height: 1;
  text-transform: uppercase;
  text-shadow: 
    2px 2px 0 ${theme.colors.tertiary.main},  /* Top-right */
    -2px -2px 0 ${theme.colors.tertiary.main}, /* Bottom-left */
    -2px 2px 0 ${theme.colors.tertiary.main},  /* Top-left */
    2px -2px 0 ${theme.colors.tertiary.main};  /* Bottom-right */
  animation: ${fadeInUp} 1.2s ease-out forwards;

  @media (max-width: ${theme.responsive.laptops}) {
    font-size: 8rem;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 4rem;
  }
`;

export const SecondBigText = styled.span`
  margin: 0;
  font-size: 12rem;
  font-weight: bolder;
  line-height: 1;
  text-transform: uppercase;
  color: ${theme.colors.tertiary.main};
  text-shadow: 
    2px 2px 0 ${theme.colors.neutral.white},  /* Top-right */
    -2px -2px 0 ${theme.colors.neutral.white}, /* Bottom-left */
    -2px 2px 0 ${theme.colors.neutral.white},  /* Top-left */
    2px -2px 0 ${theme.colors.neutral.white};  /* Bottom-right */
  width: 0;
  overflow: hidden;
  animation: 
    ${fadeInUp} 1.2s ease-out forwards,
    ${typing} 1.2s steps(30, end) forwards,
    ${blink} 0.75s step-end infinite;

  @media (max-width: ${theme.responsive.laptops}) {
    font-size: 8rem;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 4rem;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -50px;
  right: -200px;
  width: 400px;
  height: auto;
  z-index: 0;
  animation: ${fadeInRight} 1.5s ease-out forwards;
  border-radius: 50%;
  border: 2px solid ${theme.colors.secondary.main};

  @media (max-width: ${theme.responsive.laptops}) {
    top: -50px;
    right: -180px;
    width: 300px;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    top: -100px;
    right: 50px;
    width: 200px;
  }
`;

export const TextImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;