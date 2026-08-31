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
  padding: ${theme.spacing['3xl']} ${theme.spacing['lg']};
  animation: ${fadeInUp} 0.4s ease-out;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: ${theme.spacing['2xl']} ${theme.spacing['md']};
  }
`;

export const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['xl']};
  max-width: 720px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['lg']};
  }
`;

export const GroupContainer = styled.article`
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

  &:hover {
    border-color: ${theme.colors.semantic.cardBorderHover};
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    padding: ${theme.spacing['lg']} ${theme.spacing['md']};
  }
`;

export const GroupTitle = styled.h3`
  margin: 0;
  font-size: ${theme.font.headings.h3.fontSize};
  font-weight: ${theme.font.headings.h3.fontWeight};
  line-height: ${theme.font.headings.h3.lineHeight};
  letter-spacing: ${theme.font.headings.h3.letterSpacing};
  color: ${theme.colors.accent.main};

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 1rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing['xs']};

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    gap: 6px;
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

export const Divider = styled.hr`
  width: 100%;
  max-width: 720px;
  height: 1px;
  background-color: ${theme.colors.semantic.divider};
  border: none;
  margin: ${theme.spacing['2xl']} auto 0;

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    margin: ${theme.spacing['xl']} auto 0;
  }
`;
