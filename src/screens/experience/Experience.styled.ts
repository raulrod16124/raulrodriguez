import styled, {css} from 'styled-components';
import theme from '../../theme/theme.json';

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing['md']};

  ${theme.media.tablet} {
    padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['lg']};
  max-width: ${theme.maxWidth.content};
  width: 100%;
  margin-top: ${theme.spacing['2xl']};

  ${theme.media.tablet} {
    gap: ${theme.spacing['xl']};
  }
`;

export const ExperienceCard = styled.article<{$isLatest?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['xs']};
  padding: ${theme.spacing['lg']} ${theme.spacing['md']};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.semantic.cardBackground};
  border: 1px solid ${theme.colors.semantic.cardBorder};
  transition:
    border-color ${theme.transition.normal},
    background-color ${theme.transition.normal},
    transform ${theme.transition.normal},
    box-shadow 0.4s ease;

  ${({$isLatest}) =>
    $isLatest &&
    css`
      background-color: ${theme.colors.semantic.cardBackgroundHighlight};
      border-color: ${theme.colors.semantic.cardBorderHighlight};
      box-shadow: 0 0 20px rgba(88, 161, 143, 0.1);

      &:hover {
        box-shadow: 0 8px 30px rgba(88, 161, 143, 0.2);
      }
    `}

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
    gap: ${theme.spacing['sm']};
  }
`;

export const RoleTitle = styled.h3`
  font-size: 1rem;
  font-weight: ${theme.font.headings.h3.fontWeight};
  line-height: ${theme.font.headings.h3.lineHeight};
  letter-spacing: ${theme.font.headings.h3.letterSpacing};
  color: ${theme.colors.neutral.white};
  margin: 0;

  ${theme.media.tablet} {
    font-size: ${theme.font.headings.h3.fontSize};
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['xs']};
  font-size: 0.8125rem;
  font-weight: ${theme.font.navText.fontWeight};
  line-height: ${theme.font.navText.lineHeight};
  color: ${theme.colors.neutral.grey};
  flex-wrap: wrap;

  ${theme.media.tablet} {
    font-size: ${theme.font.navText.fontSize};
  }
`;

export const CompanyName = styled.span`
  color: ${theme.colors.accent.highContrast};
  font-weight: 500;
`;

export const Separator = styled.span`
  color: ${theme.colors.neutral.grey};
`;

export const DescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['xs']};
`;

export const DescriptionItem = styled.li`
  font-size: 0.8125rem;
  line-height: ${theme.font.navText.lineHeight};
  color: ${theme.colors.neutral.lightGrey};
  padding-left: ${theme.spacing['sm']};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${theme.colors.accent.main};
  }

  ${theme.media.tablet} {
    font-size: ${theme.font.navText.fontSize};
    padding-left: ${theme.spacing['md']};

    &::before {
      top: ${theme.spacing['xs']};
      width: 6px;
      height: 6px;
    }
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['xxs']};
  margin-top: ${theme.spacing['xxs']};

  ${theme.media.tablet} {
    gap: ${theme.spacing['xs']};
    margin-top: ${theme.spacing['xxs']};
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
