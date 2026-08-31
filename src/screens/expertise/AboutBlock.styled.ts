import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing['xl']} 0 0;
  width: 100%;
  max-width: ${theme.maxWidth.content};
  margin: 0 auto;

  ${theme.media.tablet} {
    padding: ${theme.spacing['2xl']} 0 0;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: ${theme.maxWidth.content};
  height: 1px;
  background-color: ${theme.colors.semantic.divider};
  border: none;
  margin: 0 auto ${theme.spacing['xl']};

  ${theme.media.tablet} {
    margin-bottom: ${theme.spacing['2xl']};
  }
`;

export const AboutLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: ${theme.font.letterSpacing.wider};
  text-transform: uppercase;
  color: ${theme.colors.neutral.grey};
  margin-bottom: ${theme.spacing['md']};
`;

export const AboutText = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: ${theme.font.body.fontWeight};
  line-height: ${theme.font.lineHeight.relaxed};
  color: ${theme.colors.neutral.lightGrey};
  text-align: center;
  max-width: 100%;

  ${theme.media.tablet} {
    font-size: ${theme.font.body.fontSize};
    max-width: ${theme.maxWidth.about};
  }
`;

export const CVLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing['xs']};
  margin-top: ${theme.spacing['lg']};
  padding: ${theme.spacing['xs']} ${theme.spacing['lg']};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${theme.colors.semantic.accentBorder};
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

  &:hover {
    background-color: ${theme.colors.semantic.accentBackgroundHover};
    border-color: ${theme.colors.accent.main};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.light};
    outline-offset: 2px;
  }

  ${theme.media.tablet} {
    width: auto;
    max-width: none;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    width: 100%;
    max-width: 280px;
  }
`;
