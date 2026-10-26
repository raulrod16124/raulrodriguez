import { Briefcase, Code2, Mail } from '@raulrod/icons';
import {
  CTAButton,
  CTALink,
  CTAContainer,
  HeroSection,
  Image,
  ImageContainer,
  GlowRing,
  GlowRingAlt,
  FloatingDot,
  NameText,
  StatusText,
  ValueProp,
  TextContainer,
  ContentWrapper,
  EyebrowText,
} from './Hero.styled';
import avatarWebp from '../../assets/images/me.webp';
import avatarPng from '../../assets/images/me.png';
import { HERO } from './Hero.constants';

export const Hero = () => {
  return (
    <HeroSection id="home" data-testid="hero">
      <FloatingDot $top="15%" $left="8%" $size={6} $delay="0s" />
      <FloatingDot $top="70%" $left="85%" $size={4} $delay="2s" />
      <FloatingDot $top="25%" $left="92%" $size={5} $delay="4s" />
      <ContentWrapper>
        <TextContainer>
          <EyebrowText>{HERO.eyebrow}</EyebrowText>
          <NameText>{HERO.role}</NameText>
          <StatusText>{HERO.currentStatus}</StatusText>
          <ValueProp>{HERO.valueProp}</ValueProp>
          <CTAContainer>
            <CTALink to={HERO.ctas.work.href}>
              <Briefcase aria-hidden="true" />
              {HERO.ctas.work.label}
            </CTALink>
            <CTAButton
              href={HERO.ctas.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 aria-hidden="true" />
              {HERO.ctas.github.label}
            </CTAButton>
            <CTALink to={HERO.ctas.contact.href}>
              <Mail aria-hidden="true" />
              {HERO.ctas.contact.label}
            </CTALink>
          </CTAContainer>
        </TextContainer>
        <ImageContainer>
          <GlowRingAlt aria-hidden="true" />
          <GlowRing aria-hidden="true" />
          <picture>
            <source srcSet={avatarWebp} type="image/webp" />
            <Image
              src={avatarPng}
              alt="Raúl Rodríguez - Senior Frontend Engineer"
              loading="eager"
            />
          </picture>
        </ImageContainer>
      </ContentWrapper>
    </HeroSection>
  );
};
