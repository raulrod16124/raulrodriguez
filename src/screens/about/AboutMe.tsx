import { AboutMeContainer, Description, FloatingCVButton, MyInfoContainer, ProfileImage, ProfileImageContainer, SectionTitle, TechnologyItem, TechnologyList } from "./AboutMe.styled";
import { increaseExperience } from "./helper";
import cv from "../../assets/cv/CV-Raul-Rodriguez.pdf";
import me from "../../assets/images/me2.png";
import 'animate.css';

export const AboutMe = () => {
  return (
    <AboutMeContainer className="animate__animated animate__fadeIn" data-testid="about-me">
      <MyInfoContainer>
        <ProfileImageContainer>
          <ProfileImage src={me} alt="Profile Image" />
          <FloatingCVButton href={cv} download>
            CV
          </FloatingCVButton>
        </ProfileImageContainer>
        
        <Description>
          <p>
            Hi, I'm Raúl Rodríguez, a passionate Frontend Developer with over {increaseExperience()} years of experience in creating dynamic, user-friendly websites and mobile apps.

            I'm highly motivated, love working in teams, and always eager to take on new challenges.

            I enjoy working out, spending time with family, and, of course, drinking coffee while coding!
          </p>
        </Description>
      </MyInfoContainer>
      
      <SectionTitle>Skills</SectionTitle>
      <TechnologyList>
        <TechnologyItem>React</TechnologyItem>
        <TechnologyItem>TypeScript</TechnologyItem>
        <TechnologyItem>CSS</TechnologyItem>
        <TechnologyItem>HTML5</TechnologyItem>
        <TechnologyItem>Sass</TechnologyItem>
        <TechnologyItem reducefontsize={true}>Styled-components</TechnologyItem>
        <TechnologyItem>JavaScript</TechnologyItem>
        <TechnologyItem>React Native</TechnologyItem>
        <TechnologyItem>Jest</TechnologyItem>
        <TechnologyItem>Testing-library</TechnologyItem>
        <TechnologyItem>Webpack</TechnologyItem>
        <TechnologyItem>Vite</TechnologyItem>
        <TechnologyItem>Kotlin</TechnologyItem>
        <TechnologyItem>Jetpack compose</TechnologyItem>
        <TechnologyItem>Node.js</TechnologyItem>
        <TechnologyItem>MongoDB</TechnologyItem>
        <TechnologyItem>Google cloud</TechnologyItem>
        <TechnologyItem>Firebase</TechnologyItem>
        <TechnologyItem>Github</TechnologyItem>
        <TechnologyItem>Figma</TechnologyItem>
      </TechnologyList>
    </AboutMeContainer>
  );
};
