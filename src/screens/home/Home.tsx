import { Avatar, CTAButton, HomeSection, PresentationContainer, SubTitle, Title } from './Home.styled';
import avatar from "../../assets/images/me.png"
import 'animate.css';
import { useContext } from 'react';
import { ScreenContext } from '../../context/ScreenContext';

export const Home = () => {
  const { setScreenType } = useContext(ScreenContext);
  return (
    <HomeSection className="animate__animated animate__fadeIn">
      <PresentationContainer>
        <Avatar src={avatar} alt="Profile Avatar" />
        <Title>Hi there, I'm Raúl Rodríguez</Title>
        <SubTitle>Frontend Developer & UI Enthusiast</SubTitle>
      </PresentationContainer>

      <CTAButton onClick={() => setScreenType("projects")}>Check my projects</CTAButton>
    </HomeSection>
  );
};
