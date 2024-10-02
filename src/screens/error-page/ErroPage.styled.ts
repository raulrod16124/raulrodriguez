import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme.json";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto 0 auto;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const ErrorMessage = styled.h1`
  font-size: 3rem;
  color: ${theme.colors.neutral.white};
  margin-bottom: 1.5rem;
  text-align: center;
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 1.8rem;
  }
`;

export const ErrorSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.neutral.darkGrey};
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 1rem;
    margin: 20px;
  }
`;

export const HomeButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: ${theme.colors.neutral.white};
  background-color: ${theme.colors.secondary.main};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary.light};
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 0.8rem 1rem;
  }
`;