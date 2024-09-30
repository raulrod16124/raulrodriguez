import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CopyrightText, FooterContainer, IconContainer } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer data-testid="footer">
      <CopyrightText>
        © {new Date().getFullYear()} All rights reserved.
      </CopyrightText>
      <IconContainer>
        <a href="https://github.com/raulrod16124" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/raul-rod/" target="_blank">
          <FaLinkedin />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};
