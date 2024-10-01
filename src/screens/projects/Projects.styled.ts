import styled, { keyframes } from 'styled-components';
import theme from "../../theme/theme.json";

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ProjectsContainer = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
  text-align: center;
  min-height: 600px;
  max-width: 980px;
  padding-top: 80px;
  margin: 0 auto;
  animation: ${slideInLeft} 1s ease-out;

  @media (max-width: ${theme.responsive.tablets}) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

export const ProjectGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  flex-wrap: wrap;
  max-width: 300px;
  gap: 10px;
  @media (max-width: ${theme.responsive.tablets}) {
    flex-wrap: nowrap;
    max-width: 100%;
    justify-content: center;
    column-gap: 20px;
    row-gap: 0;
  }
  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    column-gap: 10px;
  }
`;

export const ProjectCard = styled.div<{selected: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: self-start;
    backdrop-filter: blur(10px);          
    -webkit-backdrop-filter: blur(10px);  
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.selected ? `${theme.colors.neutral.white}` : "rgba(69, 77, 93, 0.2)"};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: 2px solid transparent;
    padding: 10px;
    cursor: pointer;
    width: 120px;
    height: 160px;
    transition: all 0.2s ease-in-out;

    &:hover {
      border: 2px solid ${theme.colors.secondary.main};
      border: ${props => props.selected ? `2px solid` : `2px solid ${theme.colors.secondary.main}`};;
    }

    @media (max-width: ${theme.responsive.tablets}) {
      width: 80px;
      height: 110px;
    }
    @media (max-width: ${theme.responsive.largeMobileDevices}) {
      width: 60px;
      height: 90px;
    }
    @media (max-width: ${theme.responsive.smallMobileDevices}) {
      width: 30px;
      height: 50px;
    }
`;

export const ProjectImage = styled.img`
    width: auto;
    max-width: 120px;
    height: 120px;
    align-self: center;
    border-radius: 5px;
    @media (max-width: ${theme.responsive.tablets}) {
      max-width: 80px;
      height: 80px;
    }
    @media (max-width: ${theme.responsive.largeMobileDevices}) {
      max-width: 60px;
      height: 60px;
    }
    @media (max-width: ${theme.responsive.smallMobileDevices}) {
      max-width: 30px;
      height: 30px;
    }
`;

export const ProjectTitle = styled.h3<{selected: boolean}>`
  font-size: 1.2rem;
  color: ${props => props.selected ? `${theme.colors.neutral.black}` : `${theme.colors.neutral.white}`};
  margin: 0;
  text-align: left;
  text-transform: uppercase;
  @media (max-width: ${theme.responsive.tablets}) {
    width: 80px;
    height: 100px;
    font-size: 0.8rem;
    text-align: left;
    padding-top: 10px;
  }
  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 0.5rem;
    text-align: left;
    padding-top: 10px
  }
`;