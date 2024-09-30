import styled from 'styled-components';
import theme from "../../../theme/theme.json";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding-top: 0;
  width: 700px;
  margin: 0 auto;
  border-left: 2px solid rgba(255,255,255,0.2);
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
`;

export const NameAndLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ProjectName = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.secondary.main};
  text-transform: uppercase;
  height: 100%;
  margin: 0;
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
  color: ${theme.colors.neutral.darkGrey};
  line-height: 1.6;
  margin: 20px;
  margin-left: 0;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TechItem = styled.span`
    background-color: ${theme.colors.tertiary.dark};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: ${theme.font.tagText.fontSize};
    color: ${theme.colors.neutral.white};
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: thin; 
  scrollbar-color: ${theme.colors.secondary.main} ${theme.colors.tertiary.dark};

  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.tertiary.dark};
    border-radius: 10px;
    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.secondary.main};
    border-radius: 10px;
    border: 3px solid ${theme.colors.tertiary.dark};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.secondary.light};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${theme.colors.secondary.light};
  }
`;

export const CarouselImage = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
  margin: 0 5px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${theme.colors.secondary.main};
  }
`;