import {
  CTAButton,
  CTAContainer,
  HomeSection,
  Image,
  NameText,
  RoleText,
  Subtitle,
  TextImageContainer,
  TitleContainer,
  ValueProp,
} from './Home.styled';
import avatar from '../../assets/images/me.png';
import 'animate.css';
import {GITHUB_PROFILE} from './Home.constants';

export const Home = () => {
  return (
    <HomeSection
      className="animate__animated animate__fadeIn"
      data-testid="home">
      <TextImageContainer>
        <TitleContainer>
          <NameText>Raúl Rodríguez</NameText>
          <RoleText>Frontend Engineer</RoleText>
          <Subtitle>React · TypeScript</Subtitle>
          <ValueProp>
            Building scalable web applications
            <br />
            and reusable frontend systems.
          </ValueProp>
          <CTAContainer>
            <CTAButton href="/experience">View experience</CTAButton>
            <CTAButton
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </CTAButton>
            <CTAButton href="/contact">Contact</CTAButton>
          </CTAContainer>
        </TitleContainer>
        <Image src={avatar} alt="Raúl Rodríguez, Frontend Engineer" />
      </TextImageContainer>
    </HomeSection>
  );
};
