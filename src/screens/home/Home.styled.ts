import styled, {keyframes} from 'styled-components';
import {Link} from 'react-router-dom';
import theme from '../../theme/theme.json';

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

export const HomeSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  padding: 100px ${theme.spacing['lg']} 60px;
  overflow: hidden;

  ${theme.media.tablet} {
    padding: ${theme.spacing['4xl']} ${theme.spacing['3xl']};
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

export const RoleText = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: ${theme.font.headings.h2.lineHeight};
  letter-spacing: ${theme.font.headings.h2.letterSpacing};
  color: ${theme.colors.neutral.lightGrey};

  ${theme.media.tablet} {
    font-size: 1.75rem;
  }

  ${theme.media.desktop} {
    font-size: ${theme.font.headings.h2.fontSize};
  }
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.accent.main};
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
  }

  ${theme.media.desktop} {
    justify-content: flex-start;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing['xs']};
  padding: ${theme.spacing['xs']} ${theme.spacing['lg']};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.neutral.black};
  background-color: ${theme.colors.accent.main};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${theme.transition.normal},
    transform ${theme.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  ${theme.media.tablet} {
    width: auto;
  }

  &:hover {
    background-color: ${theme.colors.accent.dark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.light};
    outline-offset: 2px;
  }
`;

export const CTALink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing['xs']};
  padding: ${theme.spacing['xs']} ${theme.spacing['lg']};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.neutral.black};
  background-color: ${theme.colors.accent.main};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${theme.transition.normal},
    transform ${theme.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  ${theme.media.tablet} {
    width: auto;
  }

  &:hover {
    background-color: ${theme.colors.accent.dark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.light};
    outline-offset: 2px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  animation: ${fadeIn} 0.6s ease-out;

  ${theme.media.tablet} {
    width: 240px;
    height: 240px;
  }

  ${theme.media.desktop} {
    width: 300px;
    height: 300px;
  }
`;

export const GlowRing = styled.span`
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    ${theme.colors.accent.main},
    ${theme.colors.accent.light},
    transparent 40%,
    ${theme.colors.accent.dark} 70%,
    ${theme.colors.accent.main}
  );
  animation: ${spin} ${theme.animation.ringSpinDuration} linear infinite;
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 3px),
    #000 calc(100% - 3px)
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 3px),
    #000 calc(100% - 3px)
  );
  pointer-events: none;

  ${theme.media.tablet} {
    inset: -8px;
  }
`;

export const GlowRingAlt = styled.span`
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg,
    rgba(255, 255, 255, 0.12),
    transparent 30%,
    ${theme.colors.accent.main} 50%,
    transparent 70%,
    rgba(255, 255, 255, 0.12)
  );
  animation: ${spin} 12s linear infinite reverse;
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 2px),
    #000 calc(100% - 2px)
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 2px),
    #000 calc(100% - 2px)
  );
  pointer-events: none;
  opacity: 0.7;

  ${theme.media.tablet} {
    inset: -16px;
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${theme.colors.border};
  z-index: 1;
  box-shadow: 0 0 30px ${theme.animation.glowColor};
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0 0 40px ${theme.animation.glowColorHover};
  }
`;

export const FloatingDot = styled.span<{
  $top: string;
  $left: string;
  $size: number;
  $delay: string;
}>`
  position: absolute;
  top: ${({$top}) => $top};
  left: ${({$left}) => $left};
  width: ${({$size}) => `${$size}px`};
  height: ${({$size}) => `${$size}px`};
  border-radius: 50%;
  background-color: ${theme.colors.accent.main};
  opacity: 0.08;
  animation: ${float} ${theme.animation.floatDuration} ease-in-out infinite;
  animation-delay: ${({$delay}) => $delay};
  pointer-events: none;

  ${theme.media.tablet} {
    opacity: 0.1;
  }
`;
