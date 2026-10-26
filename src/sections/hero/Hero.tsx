import { Briefcase, Mail } from '@raulrod/icons';
import { FaGithub } from 'react-icons/fa';
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
import { useSiteContent } from '../../i18n/useSiteContent';

export const Hero = () => {
  const { hero } = useSiteContent();

  return (
    <HeroSection id="home" data-testid="hero">
      <FloatingDot $top="15%" $left="8%" $size={6} $delay="0s" />
      <FloatingDot $top="70%" $left="85%" $size={4} $delay="2s" />
      <FloatingDot $top="25%" $left="92%" $size={5} $delay="4s" />
      <ContentWrapper>
        <TextContainer>
          <EyebrowText>{hero.eyebrow}</EyebrowText>
          <NameText>{hero.role}</NameText>
          <StatusText>{hero.status}</StatusText>
          <ValueProp>{hero.valueProp}</ValueProp>
          <CTAContainer>
            <CTALink to={hero.ctas.work.href} $variant="primary">
              <Briefcase size={18} aria-hidden="true" />
              {hero.ctas.work.label}
            </CTALink>
            <CTALink to={hero.ctas.contact.href} $variant="secondary">
              <Mail size={18} aria-hidden="true" />
              {hero.ctas.contact.label}
            </CTALink>
            <CTAButton
              href={hero.ctas.github.href}
              target="_blank"
              rel="noopener noreferrer"
              $variant="secondary"
            >
              <FaGithub size={18} aria-hidden="true" />
              {hero.ctas.github.label}
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
              alt={hero.avatarAlt}
              loading="eager"
            />
          </picture>
        </ImageContainer>
      </ContentWrapper>
    </HeroSection>
  );
};
