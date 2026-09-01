import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const ExpertiseSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing['md']};

  ${theme.media.tablet} {
    padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  }
`;

export const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing['lg']};
  max-width: ${theme.maxWidth.content};
  width: 100%;
  margin-top: ${theme.spacing['2xl']};

  ${theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing['xl']};
  }
`;

export const GroupContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['sm']};
  padding: ${theme.spacing['lg']} ${theme.spacing['md']};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.semantic.cardBackground};
  border: 1px solid ${theme.colors.semantic.cardBorder};
  transition:
    border-color ${theme.transition.normal},
    background-color ${theme.transition.normal},
    transform ${theme.transition.normal},
    box-shadow 0.4s ease;

  &:hover {
    border-color: ${theme.colors.semantic.cardBorderHover};
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(88, 161, 143, 0.15);
  }

  &:focus-within {
    outline: 3px solid ${theme.colors.accent.main};
    outline-offset: 3px;
  }

  ${theme.media.tablet} {
    padding: ${theme.spacing['lg']};
  }
`;

export const GroupTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${theme.spacing['xs']};
  font-size: 1rem;
  font-weight: ${theme.font.headings.h3.fontWeight};
  line-height: ${theme.font.headings.h3.lineHeight};
  letter-spacing: ${theme.font.headings.h3.letterSpacing};
  color: ${theme.colors.accent.highContrast};

  svg {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  ${theme.media.tablet} {
    font-size: ${theme.font.headings.h3.fontSize};

    svg {
      font-size: 1.25rem;
    }
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['xxs']};

  ${theme.media.tablet} {
    gap: ${theme.spacing['xs']};
  }
`;

export const TechTag = styled.span`
  font-size: 0.75rem;
  font-weight: ${theme.font.tagText.fontWeight};
  line-height: ${theme.font.tagText.lineHeight};
  letter-spacing: ${theme.font.tagText.letterSpacing};
  color: ${theme.colors.neutral.grey};
  padding: ${theme.spacing['xxs']} ${theme.spacing['xs']};
  border: 1px solid ${theme.colors.semantic.tagBorder};
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.semantic.tagBackground};
  transition:
    background-color ${theme.transition.fast},
    border-color ${theme.transition.fast},
    transform ${theme.transition.fast},
    box-shadow ${theme.transition.fast};

  &:hover {
    background-color: ${theme.colors.semantic.tagBackgroundHover};
    border-color: ${theme.colors.semantic.tagBorderHover};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(88, 161, 143, 0.1);
  }

  ${theme.media.tablet} {
    font-size: ${theme.font.tagText.fontSize};
    padding: ${theme.spacing['xxs']} ${theme.spacing['xs']};
  }
`;

export const Divider = styled.hr`
  width: 100%;
  max-width: ${theme.maxWidth.content};
  height: 1px;
  background-color: ${theme.colors.semantic.divider};
  border: none;
  margin: ${theme.spacing['xl']} auto 0;

  ${theme.media.tablet} {
    margin: ${theme.spacing['2xl']} auto 0;
  }
`;
