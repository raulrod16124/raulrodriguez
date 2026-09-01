import theme from '../../theme/theme.json';

export const focusVisible = `
  &:focus-visible {
    outline: 3px solid ${theme.colors.accent.highContrast};
    outline-offset: 3px;
    border-radius: ${theme.borderRadius.sm};
  }
`;
