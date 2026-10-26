import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const Timeline = styled.ol`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
  width: 100%;
  max-width: ${theme.maxWidth.content};
  margin: 0 auto;
  padding: 0;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    top: ${theme.spacing.sm};
    bottom: ${theme.spacing.sm};
    left: 7px;
    width: 1px;
    background: linear-gradient(
      180deg,
      ${theme.colors.accent.main},
      ${theme.colors.semantic.divider}
    );
  }

  ${theme.media.tablet} {
    gap: ${theme.spacing['2xl']};
  }
`;

export const TimelineEntry = styled.li`
  position: relative;
  padding-left: ${theme.spacing['2xl']};

  &::before {
    content: '';
    position: absolute;
    top: ${theme.spacing.lg};
    left: 1px;
    width: 13px;
    height: 13px;
    border: 2px solid ${theme.colors.semantic.cardBorderHover};
    border-radius: 50%;
    background: ${theme.colors.background};
    z-index: 1;
  }

  &[data-current='true']::before {
    border-color: ${theme.colors.accent.highContrast};
    background: ${theme.colors.accent.main};
    box-shadow: 0 0 0 4px ${theme.colors.semantic.accentBackgroundHover};
  }
`;

export const ExperienceCard = styled.article`
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.semantic.cardBorder};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.semantic.cardBackground};
  transition:
    background-color ${theme.transition.normal},
    border-color ${theme.transition.normal},
    box-shadow ${theme.transition.boxShadow};

  &:hover {
    background-color: ${theme.colors.semantic.cardBackgroundHighlight};
    border-color: ${theme.colors.semantic.cardBorderHover};
  }

  &[data-current='true'] {
    border-color: ${theme.colors.semantic.accentBorder};
    background-color: ${theme.colors.semantic.cardBackgroundHighlight};
    box-shadow: ${theme.boxShadow.cardHighlight};
  }

  ${theme.media.tablet} {
    padding: ${theme.spacing.xl};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${theme.spacing.xs};
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.font.small.fontSize};
  line-height: ${theme.font.small.lineHeight};
  color: ${theme.colors.neutral.grey};

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.xxs};

    & > [aria-hidden='true'] {
      display: none;
    }
  }
`;

export const Role = styled.span`
  color: ${theme.colors.accent.highContrast};
  font-weight: 500;
`;

export const Separator = styled.span`
  color: ${theme.colors.neutral.grey};
`;

export const ResponsibilityList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ResponsibilityItem = styled.li`
  position: relative;
  padding-left: ${theme.spacing.md};
  font-size: ${theme.font.small.fontSize};
  line-height: ${theme.font.lineHeight.normal};
  color: ${theme.colors.neutral.lightGrey};

  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${theme.colors.accent.main};
  }
`;
