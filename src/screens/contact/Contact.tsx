import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import {
  ContactContainer,
  ContactTitle,
  ContactSubtitle,
  ContactLinks,
  ContactLink,
  VisuallyHidden,
} from './Contact.styled';
import {ScrollReveal} from '../../components/ScrollReveal';

const EMAIL = 'raul.rod16124@gmail.com';
const GITHUB_URL = 'https://github.com/raulrod16124';
const LINKEDIN_URL = 'https://www.linkedin.com/in/raul-rod/';

export const Contact = () => {
  return (
    <ContactContainer
      data-testid="contact"
      id="contact"
      aria-labelledby="contact-title">
      <VisuallyHidden as="h2" id="contact-title">
        Get in Touch
      </VisuallyHidden>
      <ScrollReveal animation="fadeIn">
        <ContactTitle>Let&apos;s Build Something Great</ContactTitle>
      </ScrollReveal>
      <ScrollReveal animation="fadeIn" delay={80}>
        <ContactSubtitle>
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </ContactSubtitle>
      </ScrollReveal>
      <ContactLinks>
        <ScrollReveal animation="fadeInUp" delay={160}>
          <ContactLink href={`mailto:${EMAIL}`} aria-label="Send email">
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </ContactLink>
        </ScrollReveal>
        <ScrollReveal animation="fadeInUp" delay={240}>
          <ContactLink
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </ContactLink>
        </ScrollReveal>
        <ScrollReveal animation="fadeInUp" delay={320}>
          <ContactLink
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile">
            <FaLinkedin aria-hidden="true" />
            <span>LinkedIn</span>
          </ContactLink>
        </ScrollReveal>
      </ContactLinks>
    </ContactContainer>
  );
};
