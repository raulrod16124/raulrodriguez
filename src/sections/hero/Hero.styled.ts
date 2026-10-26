import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme.json';
import { focusVisible } from '../../components/shared/focusStyles';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const imagePulseIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  60% {
    opacity: 1;
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ringReveal = keyframes`
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: calc(var(--navbar-height, 68px) + clamp(40px, 7vh, 72px))
    ${theme.spacing['md']} ${theme.spacing['3xl']};
  overflow: hidden;
  scroll-margin-top: var(--navbar-height, 68px);

  ${theme.media.tablet} {
    padding: calc(var(--navbar-height, 76px) + ${theme.spacing['3xl']})
      ${theme.spacing['3xl']} ${theme.spacing['4xl']};
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  max-width: ${theme.maxWidth.hero};
  width: 100%;
  gap: ${theme.spacing['2xl']};
  text-align: center;

  ${theme.media.desktop} {
    flex-direction: row;
    gap: ${theme.spacing['3xl']};
    text-align: left;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['lg']};
  animation: ${fadeIn} 0.6s ease-out;
  align-items: center;

  ${theme.media.desktop} {
    align-items: flex-start;
  }
`;

export const EyebrowText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${theme.colors.neutral.lightGrey};
  letter-spacing: ${theme.font.letterSpacing.wider};
  text-transform: uppercase;

  ${theme.media.tablet} {
    font-size: 1rem;
  }
`;

export const NameText = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: ${theme.font.headings.h1.letterSpacing};
  color: ${theme.colors.neutral.white};

  ${theme.media.tablet} {
    font-size: 3rem;
  }

  ${theme.media.desktop} {
    font-size: ${theme.font.headings.h1.fontSize};
  }
`;

export const StatusText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.accent.highContrast};
  letter-spacing: ${theme.font.letterSpacing.wider};

  ${theme.media.tablet} {
    font-size: 1.125rem;
  }
`;

export const ValueProp = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  line-height: ${theme.font.lineHeight.relaxed};
  color: ${theme.colors.neutral.grey};
  max-width: 100%;

  ${theme.media.desktop} {
    max-width: 420px;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  gap: ${theme.spacing['sm']};
  margin-top: ${theme.spacing['xs']};

  ${theme.media.tablet} {
    flex-direction: row;
    width: auto;
    max-width: none;
    justify-content: center;
    flex-wrap: wrap;
  }

  ${theme.media.desktop} {
    justify-content: flex-start;
  }
`;

type CtaVariant = 'primary' | 'secondary';

const ctaStyles = css<{ $variant: CtaVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing['xs']};
  padding: ${theme.spacing['xs']} ${theme.spacing['lg']};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${({ $variant }) =>
    $variant === 'primary'
      ? theme.colors.neutral.black
      : theme.colors.neutral.white};
  background-color: ${({ $variant }) =>
    $variant === 'primary' ? theme.colors.accent.main : 'transparent'};
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'primary' ? 'transparent' : theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${theme.transition.normal},
    border-color ${theme.transition.normal},
    transform ${theme.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  ${theme.media.tablet} {
    width: auto;
  }

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === 'primary'
        ? theme.colors.accent.dark
        : theme.colors.semantic.accentBackgroundHover};
    border-color: ${({ $variant }) =>
      $variant === 'primary'
        ? 'transparent'
        : theme.colors.semantic.accentBorder};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  ${focusVisible}
`;

export const CTAButton = styled.a<{ $variant: CtaVariant }>`
  ${ctaStyles}
`;

export const CTALink = styled(Link)<{ $variant: CtaVariant }>`
  ${ctaStyles}
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  animation: ${imagePulseIn} 0.8s ease-out;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border: 3px solid ${theme.colors.accent.main};
  box-shadow: 0 0 40px rgba(88, 161, 143, 0.3);

  ${theme.media.tablet} {
    width: 250px;
    height: 250px;
  }

  ${theme.media.desktop} {
    width: 320px;
    height: 320px;
  }
`;

export const GlowRing = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.accent.main};
  opacity: 0.3;
  animation:
    ${spin} 20s linear infinite,
    ${ringReveal} 1s ease-out;
  z-index: 0;

  ${theme.media.tablet} {
    width: 280px;
    height: 280px;
  }

  ${theme.media.desktop} {
    width: 360px;
    height: 360px;
  }
`;

export const GlowRingAlt = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.accent.main};
  opacity: 0.2;
  animation:
    ${spin} 30s linear infinite reverse,
    ${ringReveal} 1.2s ease-out;
  z-index: 0;

  ${theme.media.tablet} {
    width: 300px;
    height: 300px;
  }

  ${theme.media.desktop} {
    width: 380px;
    height: 380px;
  }
`;

export const FloatingDot = styled.div<{
  $top: string;
  $left: string;
  $size: number;
  $delay: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background-color: ${theme.colors.accent.main};
  opacity: 0.6;
  animation:
    ${float} 6s ease-in-out infinite,
    ${fadeIn} 1s ease-out;
  animation-delay: ${({ $delay }) => $delay};
  z-index: 1;
`;
