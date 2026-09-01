import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import {
  NavButton,
  NavButtons,
  NavbarContainer,
  NavbarWrapper,
  HamburgerButton,
} from './Navbar.styled';
import {VisuallyHidden} from '../shared/VisuallyHidden';

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  return (
    <NavbarWrapper data-testid="Navbar" aria-label="Main navigation">
      <NavbarContainer>
        <VisuallyHidden>Navigation menu</VisuallyHidden>
        <HamburgerButton
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <HiX size={20} aria-hidden="true" /> : <HiMenu size={20} aria-hidden="true" />}
        </HamburgerButton>
        <NavButtons id="mobile-nav" $isOpen={isMenuOpen}>
          <NavButton
            to="home"
            active={pathname === '/home' || pathname === '/'}
            onClick={closeMenu}
          >
            Home
          </NavButton>
          <NavButton
            to="experience"
            active={pathname.split('/')[1] === 'experience'}
            onClick={closeMenu}
          >
            Experience
          </NavButton>
          <NavButton
            to="expertise"
            active={pathname.split('/')[1] === 'expertise'}
            onClick={closeMenu}
          >
            Expertise
          </NavButton>
          <NavButton
            to="contact"
            active={pathname.split('/')[1] === 'contact'}
            onClick={closeMenu}
          >
            Contact
          </NavButton>
        </NavButtons>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
