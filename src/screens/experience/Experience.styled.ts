import styled, {css, keyframes} from 'styled-components';
import theme from '../../theme/theme.json';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  animation: ${fadeInUp} 0.4s ease-out;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: ${theme.spacing['2xl']} ${theme.spacing['md']};
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['xl']};
  max-width: 720px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    gap: ${theme.spacing['lg']};
  }
`;

export const ExperienceCard = styled.article<{$isLatest?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['sm']};
  padding: ${theme.spacing['lg']};
  border-radius: 8px;
  background-color: ${theme.colors.semantic.cardBackground};
  border: 1px solid ${theme.colors.semantic.cardBorder};
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  ${({$isLatest}) =>
    $isLatest &&
    css`
      background-color: ${theme.colors.semantic.cardBackgroundHighlight};
      border-color: ${theme.colors.semantic.cardBorderHighlight};
    `}

  &:hover {
    border-color: ${theme.colors.semantic.cardBorderHover};
  }

  &:focus-within {
    outline: 2px solid ${theme.colors.accent.main};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: ${theme.spacing['lg']} ${theme.spacing['md']};
    gap: ${theme.spacing['xs']};
  }
`;

export const RoleTitle = styled.h3`
  font-size: ${theme.font.headings.h3.fontSize};
  font-weight: ${theme.font.headings.h3.fontWeight};
  line-height: ${theme.font.headings.h3.lineHeight};
  letter-spacing: ${theme.font.headings.h3.letterSpacing};
  color: ${theme.colors.neutral.white};
  margin: 0;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 1rem;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['xs']};
  font-size: ${theme.font.navText.fontSize};
  font-weight: ${theme.font.navText.fontWeight};
  line-height: ${theme.font.navText.lineHeight};
  color: ${theme.colors.neutral.grey};
  flex-wrap: wrap;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 0.8125rem;
    gap: 6px;
  }
`;

export const CompanyName = styled.span`
  color: ${theme.colors.accent.main};
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
  font-size: ${theme.font.navText.fontSize};
  line-height: ${theme.font.navText.lineHeight};
  color: ${theme.colors.neutral.lightGrey};
  padding-left: ${theme.spacing['md']};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: ${theme.spacing['xs']};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${theme.colors.accent.main};
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 0.8125rem;
    padding-left: 14px;

    &::before {
      top: 7px;
      width: 5px;
      height: 5px;
    }
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['xs']};
  margin-top: ${theme.spacing['xxs']};

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    gap: 6px;
    margin-top: 2px;
  }
`;

export const TechTag = styled.span`
  font-size: ${theme.font.tagText.fontSize};
  font-weight: ${theme.font.tagText.fontWeight};
  line-height: ${theme.font.tagText.lineHeight};
  letter-spacing: ${theme.font.tagText.letterSpacing};
  color: ${theme.colors.neutral.grey};
  padding: ${theme.spacing['xxs']} ${theme.spacing['xs']};
  border: 1px solid ${theme.colors.semantic.tagBorder};
  border-radius: 4px;
  background-color: ${theme.colors.semantic.tagBackground};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${theme.colors.semantic.tagBackgroundHover};
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 3px 8px;
    font-size: 0.75rem;
  }
`;
