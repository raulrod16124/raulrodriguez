import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import {
  ContactContainer,
  ContactTitle,
  ContactLinks,
  ContactLink,
} from './Contact.styled';
import {ScrollReveal} from '../../components/ScrollReveal';

const EMAIL = 'raul.rod16124@gmail.com';
const GITHUB_URL = 'https://github.com/raulrod16124';
const LINKEDIN_URL = 'https://www.linkedin.com/in/raul-rod/';

export const Contact = () => {
  return (
    <ContactContainer data-testid="contact" id="contact">
      <ScrollReveal animation="fadeIn">
        <ContactTitle>Interested in working together?</ContactTitle>
      </ScrollReveal>
      <ContactLinks>
        <ScrollReveal animation="fadeIn" delay={120}>
          <ContactLink href={`mailto:${EMAIL}`} aria-label="Send email">
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </ContactLink>
        </ScrollReveal>
        <ScrollReveal animation="fadeIn" delay={240}>
          <ContactLink
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile">
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </ContactLink>
        </ScrollReveal>
        <ScrollReveal animation="fadeIn" delay={360}>
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
