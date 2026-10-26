import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['3xl']};

  ${theme.media.desktop} {
    gap: ${theme.spacing['4xl']};
  }
`;

export const ProjectMedia = styled.figure`
  margin: 0;
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: 1px solid ${theme.colors.semantic.cardBorder};
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.surface};
  box-shadow: ${theme.boxShadow.cardHighlight};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProjectCard = styled.article`
  display: grid;
  gap: ${theme.spacing.lg};
  align-items: center;

  ${theme.media.tablet} {
    gap: ${theme.spacing.xl};
  }

  ${theme.media.desktop} {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: ${theme.spacing['2xl']};

    &[data-reverse='true'] > ${ProjectMedia} {
      order: 2;
    }
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const ProjectRole = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  font-size: ${theme.font.small.fontSize};
  color: ${theme.colors.neutral.grey};
`;

export const HighlightList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.xs};
  font-size: ${theme.font.small.fontSize};
  line-height: ${theme.font.lineHeight.normal};
  color: ${theme.colors.neutral.grey};

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-top: 3px;
    color: ${theme.colors.accent.main};
  }
`;
