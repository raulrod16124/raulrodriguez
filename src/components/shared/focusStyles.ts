import theme from '../../theme/theme.json';

export const focusVisible = `
  &:focus-visible {
    outline: 3px solid ${theme.colors.accent.main};
    outline-offset: 3px;
    border-radius: ${theme.borderRadius.sm};
  }
`;

export const focusVisibleCompact = `
  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.main};
    outline-offset: 2px;
  }
`;
