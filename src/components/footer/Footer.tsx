import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {CopyrightText, FooterContainer, IconContainer} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer data-testid="footer" aria-label="Site footer">
      <CopyrightText>
        © {new Date().getFullYear()} Raúl Rodríguez. All rights reserved.
      </CopyrightText>
      <IconContainer>
        <a
          href="https://github.com/raulrod16124"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile">
          <FaGithub aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/raul-rod/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile">
          <FaLinkedin aria-hidden="true" />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};
