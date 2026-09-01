import styled, { css, keyframes } from 'styled-components';
import theme from '../../../theme/theme.json';

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
`;

const skeletonLifecycle = keyframes`
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const reducedMotionStyles = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.5;
  }
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${skeletonLifecycle} 650ms ease forwards;
  ${reducedMotionStyles}
`;

export const SkeletonBlock = styled.div<{
  $width?: string;
  $height?: string;
  $borderRadius?: string;
}>`
  background-color: ${theme.colors.surface};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? theme.borderRadius.sm};
  width: ${({ $width }) => $width ?? '100%'};
  height: ${({ $height }) => $height ?? '16px'};
  animation: ${pulse} 1.5s ease-in-out infinite;
  ${reducedMotionStyles}
`;

export const SkeletonCircle = styled.div<{ $size?: string }>`
  background-color: ${theme.colors.surface};
  border-radius: 50%;
  width: ${({ $size }) => $size ?? '200px'};
  height: ${({ $size }) => $size ?? '200px'};
  flex-shrink: 0;
  animation: ${pulse} 1.5s ease-in-out infinite;
  ${reducedMotionStyles}
`;

export const SkeletonPill = styled.div`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.sm};
  height: 28px;
  display: inline-block;
  animation: ${pulse} 1.5s ease-in-out infinite;
  ${reducedMotionStyles}
`;

export const SkeletonCard = styled.div<{ $highlighted?: boolean }>`
  background-color: ${({ $highlighted }) =>
    $highlighted ? theme.colors.semantic.cardBackgroundHighlight : theme.colors.semantic.cardBackground};
  border: 1px solid ${theme.colors.semantic.cardBorder};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  ${theme.media.tablet} {
    padding: ${theme.spacing.lg};
  }
`;
