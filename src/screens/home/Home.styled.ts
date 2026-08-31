import styled, { keyframes } from 'styled-components';
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

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: auto;
  padding: 100px ${theme.spacing['lg']} 60px;

  ${theme.media.tablet} {
    min-height: calc(100vh - 100px);
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
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.neutral.grey};

  ${theme.media.tablet} {
    font-size: 1rem;
  }
`;

export const RoleText = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: ${theme.font.headings.h1.fontWeight};
  line-height: ${theme.font.headings.h1.lineHeight};
  letter-spacing: ${theme.font.headings.h1.letterSpacing};
  color: ${theme.colors.neutral.white};

  ${theme.media.tablet} {
    font-size: 2.25rem;
  }

  ${theme.media.desktop} {
    font-size: ${theme.font.headings.h1.fontSize};
  }
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
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

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${theme.colors.border};
  flex-shrink: 0;
  animation: ${fadeIn} 0.6s ease-out;

  ${theme.media.tablet} {
    width: 220px;
    height: 220px;
  }

  ${theme.media.desktop} {
    width: 280px;
    height: 280px;
  }
`;
