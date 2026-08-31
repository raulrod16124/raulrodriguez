import styled from 'styled-components';
import theme from './theme/theme.json';

export const GradientBackground = styled.div`
  background-color: ${theme.colors.background};
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  color: ${theme.colors.neutral.white};
  font-family: ${theme.font.primary.fontFamily};
  flex: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const AppContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.neutral.grey} ${theme.colors.surface};

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.surface};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.neutral.grey};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.neutral.lightGrey};
  }
`;
