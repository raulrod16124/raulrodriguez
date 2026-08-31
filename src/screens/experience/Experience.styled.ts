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
  padding: 64px 24px;
  animation: ${fadeInUp} 0.4s ease-out;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 48px 16px;
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 720px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    gap: 24px;
  }
`;

export const ExperienceCard = styled.article<{$isLatest?: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-radius: 8px;
  background-color: rgba(69, 77, 93, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  ${({$isLatest}) =>
    $isLatest &&
    css`
      background-color: rgba(69, 77, 93, 0.25);
      border-color: rgba(255, 255, 255, 0.12);
    `}

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:focus-within {
    outline: 2px solid ${theme.colors.secondary.main};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 20px 16px;
    gap: 10px;
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
  gap: 8px;
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
  color: ${theme.colors.secondary.main};
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
  gap: 8px;
`;

export const DescriptionItem = styled.li`
  font-size: ${theme.font.navText.fontSize};
  line-height: ${theme.font.navText.lineHeight};
  color: ${theme.colors.neutral.lightGrey};
  padding-left: 16px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${theme.colors.secondary.main};
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
  gap: 8px;
  margin-top: 4px;

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
  padding: 4px 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 3px 8px;
    font-size: 0.75rem;
  }
`;
