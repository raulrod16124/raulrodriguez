import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

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
  transition:
    color ${theme.transition.normal},
    transform ${theme.transition.fast},
    background-color ${theme.transition.normal},
    box-shadow ${theme.transition.normal};

  svg {
    font-size: 2rem;
    transition:
      transform ${theme.transition.normal},
      filter ${theme.transition.normal};
  }

  &:hover {
    color: ${theme.colors.accent.main};
    transform: translateY(-4px);
    background-color: ${theme.colors.semantic.accentBackgroundHover};
    box-shadow: 0 8px 24px rgba(88, 161, 143, 0.15);
  }

  &:hover svg {
    transform: scale(1.2);
    filter: drop-shadow(0 0 8px rgba(88, 161, 143, 0.4));
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.accent.main};
    outline-offset: 4px;
    border-radius: ${theme.borderRadius.sm};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: color ${theme.transition.normal};

    &:hover {
      transform: none;
    }

    &:hover svg {
      transform: none;
    }
  }
`;
