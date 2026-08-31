import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 0;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 32px 0 0;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: 720px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  border: none;
  margin: 0 auto 48px;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    margin-bottom: 32px;
  }
`;

export const AboutLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.neutral.grey};
  margin-bottom: 16px;
`;

export const AboutText = styled.p`
  margin: 0;
  font-size: ${theme.font.text.fontSize};
  line-height: 1.7;
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
  margin-top: 24px;
  padding: 10px 20px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.secondary.main};
  background-color: transparent;
  border: 1px solid rgba(88, 161, 143, 0.4);
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: rgba(88, 161, 143, 0.1);
    border-color: ${theme.colors.secondary.main};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.secondary.light};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    width: 100%;
    max-width: 280px;
  }
`;
