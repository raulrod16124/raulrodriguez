import {
  CTAButton,
  CTAContainer,
  HomeSection,
  Image,
  NameText,
  RoleText,
  Subtitle,
  TextContainer,
  ContentWrapper,
  ValueProp,
} from './Home.styled';
import avatarWebp from '../../assets/images/me.webp';
import avatarPng from '../../assets/images/me.png';
import { GITHUB_PROFILE } from './Home.constants';

export const Home = () => {
  return (
    <HomeSection data-testid="home">
      <ContentWrapper>
        <TextContainer>
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
              rel="noopener noreferrer"
            >
              GitHub
            </CTAButton>
            <CTAButton href="/contact">Contact</CTAButton>
          </CTAContainer>
        </TextContainer>
        <picture>
          <source srcSet={avatarWebp} type="image/webp" />
          <Image
            src={avatarPng}
            alt="Raúl Rodríguez, Frontend Engineer"
            width={280}
            height={280}
          />
        </picture>
      </ContentWrapper>
    </HomeSection>
  );
};
