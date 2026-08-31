import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import {
  ContactContainer,
  ContactTitle,
  ContactLinks,
  ContactLink,
} from './Contact.styled';

const EMAIL = 'raul.rod16124@gmail.com';
const GITHUB_URL = 'https://github.com/raulrod16124';
const LINKEDIN_URL = 'https://www.linkedin.com/in/raul-rod/';

export const Contact = () => {
  return (
    <ContactContainer data-testid="contact" id="contact">
      <ContactTitle>Interested in working together?</ContactTitle>
      <ContactLinks>
        <ContactLink href={`mailto:${EMAIL}`} aria-label="Send email">
          <FaEnvelope aria-hidden="true" />
          <span>Email</span>
        </ContactLink>
        <ContactLink
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile">
          <FaGithub aria-hidden="true" />
          <span>GitHub</span>
        </ContactLink>
        <ContactLink
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile">
          <FaLinkedin aria-hidden="true" />
          <span>LinkedIn</span>
        </ContactLink>
      </ContactLinks>
    </ContactContainer>
  );
};
