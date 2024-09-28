import { FirstBigText, HomeSection, Image, NormalText, SecondBigText, TextImageContainer, TitleContainer } from './Home.styled';
import avatar from "../../assets/images/me.png"
import 'animate.css';

export const Home = () => {
  return (
    <HomeSection className="animate__animated animate__fadeIn">
      <TextImageContainer>
        <TitleContainer>
          <NormalText>I'm Raúl Rodríguez</NormalText>
          <FirstBigText>Frontend</FirstBigText>
          <SecondBigText>Developer</SecondBigText>
        </TitleContainer>
        <Image src={avatar} alt="Frontend Developer" />
      </TextImageContainer>
    </HomeSection>
  );
};
