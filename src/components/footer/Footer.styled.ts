import styled from 'styled-components';
import theme from '../../theme/theme.json';
import {focusVisible} from '../shared/focusStyles';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing['sm']};
  padding: ${theme.spacing['lg']};
  border-top: 1px solid ${theme.colors.border};

  ${theme.media.tablet} {
    flex-direction: row;
    gap: ${theme.spacing['lg']};
    padding: ${theme.spacing['lg']} ${theme.spacing['3xl']};
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
      transition: width ${theme.transition.normal}, left ${theme.transition.normal};
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
