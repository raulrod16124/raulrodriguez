import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme.json";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
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
  padding: 80px 20px;
  animation: ${fadeInUp} 0.5s ease-in-out;
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.font.headings.h2.fontSize};
  font-weight: ${theme.font.headings.h2.fontWeight};
  color: ${theme.colors.primary.main};
  text-transform: uppercase;
  margin-bottom: 48px;
  text-align: center;
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 720px;
  width: 100%;
`;

export const ExperienceCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 8px;
  background-color: rgba(69, 77, 93, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.15);
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 16px;
  }
`;

export const RoleTitle = styled.h3`
  font-size: ${theme.font.headings.h3.fontSize};
  font-weight: ${theme.font.headings.h3.fontWeight};
  color: ${theme.colors.neutral.white};
  margin: 0;
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${theme.font.navText.fontSize};
  color: ${theme.colors.neutral.grey};
  flex-wrap: wrap;
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
  gap: 12px;
`;

export const DescriptionItem = styled.li`
  font-size: ${theme.font.navText.fontSize};
  line-height: ${theme.font.navText.lineHeight};
  color: ${theme.colors.neutral.lightGrey};
  padding-left: 16px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${theme.colors.secondary.main};
  }
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const TechTag = styled.span`
  font-size: ${theme.font.navText.fontSize};
  color: ${theme.colors.neutral.grey};
  padding: 4px 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
`;
