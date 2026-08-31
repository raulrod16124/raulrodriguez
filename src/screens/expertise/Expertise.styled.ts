import styled, {keyframes} from 'styled-components';
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

export const ExpertiseSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;
  animation: ${fadeInUp} 0.4s ease-out;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 48px 16px;
  }
`;

export const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 720px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const GroupContainer = styled.article`
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

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: 20px 16px;
  }
`;

export const GroupTitle = styled.h3`
  margin: 0;
  font-size: ${theme.font.headings.h3.fontSize};
  font-weight: ${theme.font.headings.h3.fontWeight};
  color: ${theme.colors.secondary.main};
  line-height: 1.3;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 1rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    gap: 6px;
  }
`;

export const TechTag = styled.span`
  font-size: ${theme.font.tagText.fontSize};
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

export const Divider = styled.hr`
  width: 100%;
  max-width: 720px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  border: none;
  margin: 48px auto 0;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    margin: 32px auto 0;
  }
`;
