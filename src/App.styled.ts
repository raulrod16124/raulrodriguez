import styled from 'styled-components';
import theme from "./theme/theme.json";

export const GradientBackground = styled.div`
  background: radial-gradient(circle at center, 
    ${theme.colors.tertiary.light} 0%, 
    ${theme.colors.tertiary.main} 40%, 
    ${theme.colors.tertiary.dark} 100%);
  display: flex;
  flex-direction: column;
  color: ${theme.colors.neutral.white};
  font-family: ${theme.font.primary.fontFamily};
  height: 100vh;
  flex: 1;

  @media (max-width: ${theme.responsive.laptops}) {
    align-items: flex-start;
  }
`;

export const AppContainer = styled.div`
  flex: 1;
  width: 100vw;
  overflow: auto;
  scrollbar-width: thin; 
  scrollbar-color: ${theme.colors.secondary.main} ${theme.colors.tertiary.dark};

  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.tertiary.dark};
    border-radius: 10px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.secondary.main};
    border-radius: 10px;
    border: 3px solid ${theme.colors.tertiary.dark};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.secondary.light};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${theme.colors.secondary.light};
  }
`;