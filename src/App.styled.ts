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

export const SkipLink = styled.a`
  position: absolute;
  top: -100%;
  left: ${theme.spacing['md']};
  z-index: 200;
  padding: ${theme.spacing['xs']} ${theme.spacing['md']};
  background-color: ${theme.colors.accent.main};
  color: ${theme.colors.neutral.black};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  border-radius: ${theme.borderRadius.sm};
  text-decoration: none;

  &:focus {
    top: ${theme.spacing['md']};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

export const AppContainer = styled.div`
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
