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
  min-height: calc(100vh - 100px);
  padding: 80px 40px;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    padding: 100px 24px 60px;
    min-height: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  gap: 64px;

  @media (max-width: ${theme.responsive.tablets}) {
    flex-direction: column-reverse;
    gap: 48px;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: ${theme.responsive.tablets}) {
    align-items: center;
  }
`;

export const NameText = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.neutral.grey};

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 0.875rem;
  }
`;

export const RoleText = styled.h2`
  margin: 0;
  font-size: ${theme.font.headings.h1.fontSize};
  font-weight: ${theme.font.headings.h1.fontWeight};
  color: ${theme.colors.neutral.white};
  line-height: 1.1;

  @media (max-width: ${theme.responsive.tablets}) {
    font-size: 2.25rem;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${theme.colors.secondary.main};
  letter-spacing: 0.05em;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 1rem;
  }
`;

export const ValueProp = styled.p`
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 300;
  line-height: 1.7;
  color: ${theme.colors.neutral.grey};
  max-width: 420px;

  @media (max-width: ${theme.responsive.tablets}) {
    max-width: 100%;
    font-size: 1rem;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: ${theme.responsive.tablets}) {
    justify-content: center;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.neutral.black};
  background-color: ${theme.colors.secondary.main};
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;

  &:hover {
    background-color: ${theme.colors.secondary.dark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.secondary.light};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${theme.colors.border};
  flex-shrink: 0;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: ${theme.responsive.tablets}) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    width: 180px;
    height: 180px;
  }
`;
