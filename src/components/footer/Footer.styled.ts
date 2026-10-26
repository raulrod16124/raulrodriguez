import styled from 'styled-components';
import theme from '../../theme/theme.json';
import { focusVisible } from '../shared/focusStyles';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border};

  ${theme.media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: ${theme.spacing.lg};
    padding: ${theme.spacing.lg} ${theme.spacing['3xl']};
  }
`;

export const FooterIdentity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xxs};
  text-align: center;

  ${theme.media.tablet} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const RoleText = styled.p`
  margin: 0;
  font-size: ${theme.font.small.fontSize};
  font-weight: ${theme.font.weight.medium};
  line-height: ${theme.font.small.lineHeight};
  color: ${theme.colors.accent.highContrast};
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-size: ${theme.font.tagText.fontSize};
  font-weight: ${theme.font.tagText.fontWeight};
  line-height: ${theme.font.tagText.lineHeight};
  letter-spacing: ${theme.font.tagText.letterSpacing};
  color: ${theme.colors.neutral.grey};
`;

export const BuiltWithText = styled.p`
  margin: 0;
  font-size: ${theme.font.small.fontSize};
  line-height: ${theme.font.small.lineHeight};
  color: ${theme.colors.neutral.grey};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.neutral.grey};
    position: relative;
    transition:
      color ${theme.transition.normal},
      transform ${theme.transition.fast};

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.accent.main};
      transition:
        width ${theme.transition.normal},
        left ${theme.transition.normal};
    }

    &:hover {
      color: ${theme.colors.neutral.white};
      transform: translateY(-2px);
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &:active {
      color: ${theme.colors.accent.main};
      transform: translateY(0);
    }

    ${focusVisible}
  }
`;
