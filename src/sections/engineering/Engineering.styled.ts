import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const PrincipleList = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin: 0;
  padding: 0;
  list-style: none;

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${theme.spacing.xl};
  }

  ${theme.media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const PrincipleItem = styled.li`
  display: flex;
  min-width: 0;
`;

export const PrincipleIndex = styled.div`
  display: flex;
`;

export const PrincipleCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${theme.spacing.lg};
  overflow: hidden;
  border: 1px solid ${theme.colors.semantic.cardBorder};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.semantic.cardBackground};
  transition:
    background-color ${theme.transition.normal},
    border-color ${theme.transition.normal};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${theme.colors.accent.main},
      transparent 70%
    );
    opacity: 0.5;
    transition: opacity ${theme.transition.normal};
  }

  &:hover {
    border-color: ${theme.colors.semantic.cardBorderHover};
    background-color: ${theme.colors.semantic.cardBackgroundHighlight};

    &::before {
      opacity: 1;
    }
  }

  ${theme.media.tablet} {
    padding: ${theme.spacing.xl};
  }
`;
