import { AboutSection, BottomContainer, DownloadCVButton, InfoContainer, InfoItem, SkillItem, SkillsContainer, SubTitle } from './About.styled';
import cv from "../../assets/cv/CV-Raúl-Rodríguez.pdf";
import 'animate.css';

export const About = () => {
  return (
    <AboutSection className="animate__animated animate__fadeIn">
      <InfoContainer>
        <InfoItem>
          <SubTitle>Experience</SubTitle>
          I'm a Frontend Developer with over 5 years of experience building cool, functional websites, 
          and in the last 3 years, I have also been diving into mobile app development.
        </InfoItem>

        <InfoItem>
          <SubTitle>Skills</SubTitle>
          I love taking on new challenges with a hands-on, can-do attitude, always looking to level up my skills 
          and bring fresh ideas to the table.
        </InfoItem>

        <InfoItem>
          <SubTitle>Team Player</SubTitle>
          I'm all about teamwork, enjoying the vibe of working together and bouncing ideas around 
          to make awesome projects happen.
        </InfoItem>

        <InfoItem>
          <SubTitle>Personal Life</SubTitle>
          On a personal note, I'm a laid-back, energetic guy who's into sports, family time, and can't live without coffee.
        </InfoItem>
      </InfoContainer>
      <BottomContainer>

        <SkillsContainer>
          <SkillItem>HTML5</SkillItem>
          <SkillItem>CSS3</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Typescript</SkillItem>
          <SkillItem>Jest</SkillItem>
          <SkillItem>Testing Library</SkillItem>
          <SkillItem>Sass</SkillItem>
          <SkillItem>Styled-components</SkillItem>
          <SkillItem>Vite</SkillItem>
          <SkillItem>React Native</SkillItem>
          <SkillItem>Kotlin</SkillItem>
          <SkillItem>JetPack Compose</SkillItem>
          <SkillItem>GitHub</SkillItem>
          <SkillItem>Google Cloud</SkillItem>
          <SkillItem>Firebase</SkillItem>
          <SkillItem>Nodejs</SkillItem>
          <SkillItem>Figma</SkillItem>
        </SkillsContainer>

        <DownloadCVButton href={cv} download>
          Download my CV
        </DownloadCVButton>
      </BottomContainer>
    </AboutSection>
  );
};
