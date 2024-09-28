import styled, { keyframes } from 'styled-components';
import theme from "../../theme/theme.json"

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const bounceUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  70% {
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const PresentationContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  animation: ${slideInFromLeft} 1s ease-out forwards;
`;

export const Title = styled.h1`
  font-size: ${theme.font.headings.h1.fontSize};
  font-weight: 700;
  margin-bottom: 10px;
  color: ${theme.colors.neutral.darkGrey};
  animation: ${fadeIn} 1.2s ease forwards;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${theme.colors.neutral.white};
  margin-bottom: 20px;
  animation: ${fadeIn} 1.5s ease forwards;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${scaleUp} 1.3s ease forwards;
`;

export const CTAButton = styled.button`
  background-color: ${theme.colors.secondary.main};
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  animation: ${bounceUp} 1.8s ease forwards;

  &:hover {
    background-color: ${theme.colors.secondary.dark};
  }
`;