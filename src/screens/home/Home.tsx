import { HiBriefcase, HiCode, HiMail } from 'react-icons/hi';
import {
  CTAButton,
  CTAContainer,
  HomeSection,
  Image,
  ImageContainer,
  GlowRing,
  GlowRingAlt,
  FloatingDot,
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
      <FloatingDot $top="15%" $left="8%" $size={6} $delay="0s" />
      <FloatingDot $top="70%" $left="85%" $size={4} $delay="2s" />
      <FloatingDot $top="25%" $left="92%" $size={5} $delay="4s" />
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
            <CTAButton href="/experience">
              <HiBriefcase aria-hidden="true" />
              View experience
            </CTAButton>
            <CTAButton
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiCode aria-hidden="true" />
              GitHub
            </CTAButton>
            <CTAButton href="/contact">
              <HiMail aria-hidden="true" />
              Contact
            </CTAButton>
          </CTAContainer>
        </TextContainer>
        <ImageContainer>
          <GlowRingAlt aria-hidden="true" />
          <GlowRing aria-hidden="true" />
          <picture>
            <source srcSet={avatarWebp} type="image/webp" />
            <Image
              src={avatarPng}
              alt="Raúl Rodríguez, Frontend Engineer"
              width={280}
              height={280}
            />
          </picture>
        </ImageContainer>
      </ContentWrapper>
    </HomeSection>
  );
};
