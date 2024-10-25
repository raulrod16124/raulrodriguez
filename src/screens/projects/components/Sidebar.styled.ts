import styled, { keyframes } from 'styled-components';
import theme from "../../../theme/theme.json";

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  width: 600px;
  margin: 0 auto;
  border-left: 2px solid rgba(255,255,255,0.2);
  animation: ${slideInRight} .5s ease-out;

  @media (max-width: ${theme.responsive.tablets}) {
    flex-direction: column;
    padding: 0;
    padding-top: 40px;
    border-left: none;
    border-top: 2px solid rgba(255,255,255,0.2);
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    padding-top: 40px;
    width: 90%;
    overflow-x: hidden;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: self-start;
`;

export const ProjectImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 10px;
  margin-right: 20px;
  @media (max-width: ${theme.responsive.tablets}) {
    width: 100px;
    height: 100px;
  }
`;

export const NameAndLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ProjectName = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.primary.main};
  text-transform: uppercase;
  height: 100%;
  margin: 0;
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 1rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  column-gap: 25px;
  transition: all 0.3s ease;

  a {
    color: ${theme.colors.neutral.lightGrey};
    font-size: ${theme.font.icons.fontSize};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.neutral.darkGrey};
    }
  }
`;

export const ProjectDescription = styled.p`
  font-size: ${theme.font.text.fontSize};
  text-align: left;
  color: ${theme.colors.neutral.white};
  line-height: 1.6;
  margin: 20px;
  margin-left: 0;

  @media (max-width: ${theme.responsive.tablets}) {
    text-align: justify;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: ${theme.responsive.tablets}) {
    width: 100%;
    justify-content: left;
  }
`;

export const TechItem = styled.span`
    backdrop-filter: blur(10px);          
    -webkit-backdrop-filter: blur(10px);  
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(69, 77, 93, 0.2);
    padding: 2px 5px;
    border: 2px solid ${theme.colors.neutral.white};
    border-radius: 5px;
    font-size: ${theme.font.tagText.fontSize};
    color: ${theme.colors.neutral.white};
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;

  @media (max-width: ${theme.responsive.tablets}) {
    width: 100%;
  }
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    flex-wrap: wrap;
  }
`;

export const CarouselImage = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
  margin: 5px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${theme.colors.secondary.main};
  }

  @media (max-width: ${theme.responsive.tablets}) {
    height: 150px;
  }
`;