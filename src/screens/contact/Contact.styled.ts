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

export const ContactContainer = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: calc(100vh - 90vh);
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;;
  max-width: 300px;
  min-height: 300px;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    max-width: 80%;
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 15px 20px;
  font-size: ${theme.font.text.fontSize};
  background-color: ${theme.colors.secondary.main};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${theme.colors.secondary.light};
  }
`;

export const ContactInfo = styled.div`
  animation: ${fadeIn} 2s ease-in-out;

  & p{
    color: ${theme.colors.neutral.darkGrey};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  animation: ${fadeIn} 2.5s ease-in-out;
`;

export const IconLink = styled.a`
  color: ${theme.colors.neutral.darkGrey};
  font-size: ${theme.font.icons.fontSize};
  transition: color 0.3s ease;
  &:hover {
    color: ${theme.colors.secondary.main};
  }
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  padding-bottom: 10px;
  color: red;
`;