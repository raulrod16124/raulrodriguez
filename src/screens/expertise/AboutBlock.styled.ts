import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing['2xl']} 0 0;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: ${theme.spacing['xl']} 0 0;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: 720px;
  height: 1px;
  background-color: ${theme.colors.semantic.divider};
  border: none;
  margin: 0 auto ${theme.spacing['2xl']};

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    margin-bottom: ${theme.spacing['xl']};
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
  font-size: ${theme.font.body.fontSize};
  font-weight: ${theme.font.body.fontWeight};
  line-height: ${theme.font.lineHeight.relaxed};
  color: ${theme.colors.neutral.lightGrey};
  text-align: center;
  max-width: 560px;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 0.9375rem;
    max-width: 100%;
  }
`;

export const CVLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacing['lg']};
  padding: ${theme.spacing['xs']} ${theme.spacing['lg']};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${theme.colors.semantic.accentBorder};
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: ${theme.colors.semantic.accentBackgroundHover};
    border-color: ${theme.colors.accent.main};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.light};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    width: 100%;
    max-width: 280px;
  }
`;
