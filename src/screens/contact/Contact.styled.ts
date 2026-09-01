import styled from 'styled-components';
import theme from '../../theme/theme.json';
import {focusVisible} from '../../components/shared/focusStyles';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.spacing['3xl']} ${theme.spacing['md']};
  text-align: center;

  ${theme.media.tablet} {
    padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  }
`;

export const ContactTitle = styled.h2`
  font-size: ${theme.font.headings.h2.fontSize};
  font-weight: ${theme.font.headings.h2.fontWeight};
  line-height: ${theme.font.headings.h2.lineHeight};
  letter-spacing: ${theme.font.headings.h2.letterSpacing};
  color: ${theme.colors.neutral.white};
  margin-bottom: ${theme.spacing['xs']};

  ${theme.media.tablet} {
    font-size: ${theme.font.headings.h1.fontSize};
  }
`;

export const ContactSubtitle = styled.p`
  font-size: ${theme.font.body.fontSize};
  font-weight: ${theme.font.body.fontWeight};
  line-height: ${theme.font.body.lineHeight};
  color: ${theme.colors.neutral.grey};
  margin-bottom: ${theme.spacing['2xl']};
  max-width: 480px;
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: ${theme.spacing['lg']};
  flex-wrap: wrap;
  justify-content: center;

  ${theme.media.tablet} {
    gap: ${theme.spacing['xl']};
  }
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing['xs']};
  color: ${theme.colors.neutral.grey};
  text-decoration: none;
  font-size: ${theme.font.body.fontSize};
  font-weight: ${theme.font.body.fontWeight};
  line-height: ${theme.font.body.lineHeight};
  padding: ${theme.spacing['sm']} ${theme.spacing['md']};
  border-radius: ${theme.borderRadius.md};
  position: relative;
  transition:
    color ${theme.transition.normal},
    transform ${theme.transition.fast},
    background-color ${theme.transition.normal},
    box-shadow ${theme.transition.boxShadow};

  &::after {
    content: '';
    position: absolute;
    bottom: ${theme.spacing['xs']};
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.accent.main};
    transition: width ${theme.transition.normal}, left ${theme.transition.normal};
  }

  svg {
    font-size: 2rem;
    transition:
      transform ${theme.transition.normal},
      filter ${theme.transition.normal};
  }

  &:hover {
    color: ${theme.colors.accent.highContrast};
    transform: translateY(-4px);
    background-color: ${theme.colors.semantic.accentBackgroundHover};
    box-shadow: ${theme.boxShadow.contactHover};
  }

  &:hover::after {
    width: 60%;
    left: 20%;
  }

  &:hover svg {
    transform: scale(1.2);
    filter: ${theme.boxShadow.iconGlow};
  }

  &:active {
    color: ${theme.colors.accent.highContrast};
    transform: translateY(-2px);
    background-color: ${theme.colors.semantic.accentBackgroundHover};
  }

  &:active svg {
    transform: scale(1.1);
  }

  ${focusVisible}

  @media (prefers-reduced-motion: reduce) {
    transition: color ${theme.transition.normal};

    &::after {
      transition: none;
    }

    &:hover {
      transform: none;
    }

    &:hover svg {
      transform: none;
    }
  }
`;
