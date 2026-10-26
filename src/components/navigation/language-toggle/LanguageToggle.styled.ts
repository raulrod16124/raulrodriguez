import styled from 'styled-components';
import theme from '../../../theme/theme.json';
import { focusVisible } from '../../shared/focusStyles';

export const LanguageToggleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.pill};
  background-color: ${theme.colors.semantic.tagBackground};
`;

export const LanguageOption = styled.button`
  min-width: 40px;
  min-height: 40px;
  padding: 0 ${theme.spacing['xs']};
  border: none;
  border-radius: ${theme.borderRadius.pill};
  background: transparent;
  color: ${theme.colors.neutral.grey};
  font-family: ${theme.font.primary.fontFamily};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: ${theme.font.letterSpacing.wide};
  cursor: pointer;
  transition:
    color ${theme.transition.fast},
    background-color ${theme.transition.fast};

  &:hover {
    color: ${theme.colors.neutral.white};
    background-color: ${theme.colors.semantic.navHoverBackground};
  }

  &[aria-pressed='true'] {
    color: ${theme.colors.neutral.black};
    background-color: ${theme.colors.accent.main};
  }

  &[aria-pressed='true']:hover {
    background-color: ${theme.colors.accent.light};
  }

  ${focusVisible}

`;
