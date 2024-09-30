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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
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
  margin-top: 30px;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const SocialIcons = styled.div`
  margin-top: 20px;
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