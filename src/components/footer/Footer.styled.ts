import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing['lg']};
  padding: ${theme.spacing['lg']} ${theme.spacing['3xl']};
  border-top: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    flex-direction: column;
    gap: ${theme.spacing['sm']};
    padding: ${theme.spacing['lg']} ${theme.spacing['lg']};
  }
`;

export const CopyrightText = styled.p`
  font-size: ${theme.font.tagText.fontSize};
  font-weight: ${theme.font.tagText.fontWeight};
  line-height: ${theme.font.tagText.lineHeight};
  letter-spacing: ${theme.font.tagText.letterSpacing};
  margin: 0;
  color: ${theme.colors.neutral.grey};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: ${theme.spacing['md']};

  a {
    color: ${theme.colors.neutral.grey};
    font-size: ${theme.font.icons.fontSize};
    transition: color 0.2s ease;

    &:hover {
      color: ${theme.colors.neutral.white};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.accent.main};
      outline-offset: 2px;
    }
  }
`;
