import { useLocation } from 'react-router-dom';
import {
  NavButton,
  NavButtons,
  NavbarContainer,
  NavbarWrapper,
} from './Navbar.styled';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <NavbarWrapper data-testid="Navbar">
      <NavbarContainer>
        <NavButtons>
          <NavButton
            to="home"
            active={pathname === '/home' || pathname === '/'}
          >
            Home
          </NavButton>
          <NavButton
            to="experience"
            active={pathname.split('/')[1] === 'experience'}
          >
            Experience
          </NavButton>
          <NavButton
            to="expertise"
            active={pathname.split('/')[1] === 'expertise'}
          >
            Expertise
          </NavButton>
          <NavButton
            to="contact"
            active={pathname.split('/')[1] === 'contact'}
          >
            Contact
          </NavButton>
        </NavButtons>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
