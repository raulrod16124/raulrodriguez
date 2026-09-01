import styled, { css, keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const animations = {
  fadeInUp,
  fadeIn,
};

export const RevealContainer = styled.div<{
  $isVisible: boolean;
  $animation: keyof typeof animations;
  $delay: number;
  $duration: number;
}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;

  ${({ $isVisible, $animation, $duration, $delay }) =>
    $isVisible &&
    css`
      animation: ${animations[$animation]} ${$duration}ms ease-out ${$delay}ms both;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;
