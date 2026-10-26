import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};

  ${theme.media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${theme.spacing.xl};
  }
`;

export const CardIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.accent.highContrast};
  background-color: ${theme.colors.semantic.accentBackgroundHover};
  border: 1px solid ${theme.colors.semantic.accentBorder};
`;

export const Card = styled.article`
  min-width: 0;
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.semantic.cardBorder};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.semantic.cardBackground};
  transition:
    background-color ${theme.transition.normal},
    border-color ${theme.transition.normal};

  &:hover {
    background-color: ${theme.colors.semantic.cardBackgroundHighlight};
    border-color: ${theme.colors.semantic.cardBorderHover};
  }

  ${theme.media.tablet} {
    padding: ${theme.spacing.xl};
  }
`;
