import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: ${theme.font.headings.h2.fontSize};
  font-weight: ${theme.font.headings.h2.fontWeight};
  line-height: ${theme.font.headings.h2.lineHeight};
  letter-spacing: ${theme.font.headings.h2.letterSpacing};
  color: ${theme.colors.neutral.white};
  margin-bottom: ${theme.spacing['2xl']};
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: ${theme.spacing['lg']};
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    flex-direction: column;
    gap: ${theme.spacing['lg']};
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
  transition: color 0.2s ease;

  svg {
    font-size: 1.75rem;
  }

  &:hover {
    color: ${theme.colors.accent.main};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.main};
    outline-offset: 4px;
    border-radius: 2px;
  }
`;
