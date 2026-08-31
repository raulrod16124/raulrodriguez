import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 4rem 1.5rem;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: ${theme.font.headings.h2.fontSize};
  font-weight: ${theme.font.headings.h2.fontWeight};
  color: ${theme.colors.neutral.white};
  margin-bottom: 2.5rem;
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.neutral.grey};
  text-decoration: none;
  font-size: ${theme.font.fontSize};
  transition: color 0.2s ease;

  svg {
    font-size: 1.75rem;
  }

  &:hover {
    color: ${theme.colors.primary.main};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary.main};
    outline-offset: 4px;
    border-radius: 2px;
  }
`;
