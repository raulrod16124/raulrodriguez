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
  padding: ${theme.spacing['4xl']} ${theme.spacing['3xl']};

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    padding: 100px ${theme.spacing['lg']} 60px;
    min-height: auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;
  gap: ${theme.spacing['3xl']};

  @media (max-width: ${theme.responsive.tablets}) {
    flex-direction: column-reverse;
    gap: ${theme.spacing['2xl']};
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['lg']};
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
  line-height: ${theme.font.headings.h1.lineHeight};
  letter-spacing: ${theme.font.headings.h1.letterSpacing};
  color: ${theme.colors.neutral.white};

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
  color: ${theme.colors.accent.main};
  letter-spacing: ${theme.font.letterSpacing.wider};

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    font-size: 1rem;
  }
`;

export const ValueProp = styled.p`
  margin: 0;
  font-size: ${theme.font.body.fontSize};
  font-weight: 300;
  line-height: ${theme.font.lineHeight.relaxed};
  color: ${theme.colors.neutral.grey};
  max-width: 420px;

  @media (max-width: ${theme.responsive.tablets}) {
    max-width: 100%;
    font-size: 1rem;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: ${theme.spacing['sm']};
  margin-top: ${theme.spacing['xs']};

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
  padding: ${theme.spacing['xs']} ${theme.spacing['lg']};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.neutral.black};
  background-color: ${theme.colors.accent.main};
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;

  &:hover {
    background-color: ${theme.colors.accent.dark};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.light};
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
