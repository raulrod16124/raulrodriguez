import styled, {keyframes} from 'styled-components';
import theme from './theme/theme.json';

const drift1 = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  14% {
    transform: translate(6vw, -4vh) scale(1.06);
    opacity: 0.88;
  }
  28% {
    transform: translate(2vw, 3vh) scale(0.96);
    opacity: 1;
  }
  42% {
    transform: translate(-5vw, 1vh) scale(1.03);
    opacity: 0.92;
  }
  57% {
    transform: translate(-1vw, -5vh) scale(0.98);
    opacity: 1;
  }
  71% {
    transform: translate(4vw, -1vh) scale(1.04);
    opacity: 0.9;
  }
  85% {
    transform: translate(-3vw, 4vh) scale(0.97);
    opacity: 1;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
`;

const drift2 = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  16% {
    transform: translate(-5vw, 3vh) scale(0.97);
    opacity: 0.9;
  }
  33% {
    transform: translate(3vw, -4vh) scale(1.05);
    opacity: 1;
  }
  50% {
    transform: translate(5vw, 2vh) scale(0.98);
    opacity: 0.87;
  }
  66% {
    transform: translate(-2vw, -3vh) scale(1.03);
    opacity: 1;
  }
  83% {
    transform: translate(-4vw, 5vh) scale(0.96);
    opacity: 0.93;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
`;

const drift3 = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.9;
  }
  20% {
    transform: translate(4vw, 3vh) scale(1.04);
    opacity: 1;
  }
  40% {
    transform: translate(-3vw, -2vh) scale(0.97);
    opacity: 0.88;
  }
  60% {
    transform: translate(2vw, -5vh) scale(1.02);
    opacity: 1;
  }
  80% {
    transform: translate(-5vw, 2vh) scale(0.99);
    opacity: 0.92;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.9;
  }
`;

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
  position: relative;
  overflow: hidden;

  > main,
  > footer {
    position: relative;
    z-index: 1;
  }
  ${theme.media.tablet} {
    > * {
      position: relative;
      z-index: 1;
    }
  }
`;

export const AmbientLayer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    will-change: transform, opacity;
  }

  &::before {
    width: 70vw;
    height: 70vw;
    max-width: 800px;
    max-height: 800px;
    top: -15%;
    left: -12%;
    background: radial-gradient(
      circle,
      rgba(88, 161, 143, 0.15) 0%,
      rgba(88, 161, 143, 0.06) 40%,
      transparent 70%
    );
    filter: blur(60px);
    animation: ${drift1} 30s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  }

  &::after {
    width: 55vw;
    height: 55vw;
    max-width: 650px;
    max-height: 650px;
    bottom: -18%;
    right: -12%;
    background: radial-gradient(
      circle,
      rgba(58, 125, 106, 0.13) 0%,
      rgba(58, 125, 106, 0.05) 45%,
      transparent 70%
    );
    filter: blur(55px);
    animation: ${drift2} 35s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  }
`;

export const AmbientBlob = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 0;
  border-radius: 50%;
  width: 45vw;
  height: 45vw;
  max-width: 500px;
  max-height: 500px;
  top: 40%;
  left: 30%;
  background: radial-gradient(
    circle,
    rgba(116, 180, 155, 0.1) 0%,
    rgba(88, 161, 143, 0.04) 45%,
    transparent 70%
  );
  filter: blur(50px);
  will-change: transform, opacity;
  animation: ${drift3} 28s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
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

  &:focus-visible {
    top: ${theme.spacing['md']};
    outline: 3px solid ${theme.colors.accent.highContrast};
    outline-offset: 3px;
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
