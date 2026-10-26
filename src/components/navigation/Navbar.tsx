import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@raulrod/ui';
import { Menu, X } from '@raulrod/icons';
import {
  NavButton,
  NavButtons,
  NavbarContainer,
  NavbarWrapper,
  HamburgerButton,
  LogoContainer,
} from './Navbar.styled';
import { Logo } from './logo';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

const SECTION_BY_HREF: Record<string, string> = {
  '#work': 'work',
  '#experience': 'experience',
  '#engineering': 'engineering',
  '#about': 'about',
  '#contact': 'contact',
};

export const Navbar = () => {
  const { hash, pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [hash, pathname, closeMenu]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  const isActive = (href: string) => {
    if (hash === href) {
      return true;
    }
    const sectionId = SECTION_BY_HREF[href];
    if (!sectionId) {
      return false;
    }
    if (pathname === '/' || pathname === '/home') {
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <NavbarWrapper data-testid="Navbar" aria-label="Main navigation">
      <NavbarContainer>
        <LogoContainer>
          <Logo width={32} height={32} />
        </LogoContainer>
        <HamburgerButton as="div">
          <IconButton
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            label={isMenuOpen ? 'Close menu' : 'Open menu'}
            variant="ghost"
            size="md"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </IconButton>
        </HamburgerButton>
        <NavButtons id="mobile-nav" $isOpen={isMenuOpen}>
          {NAV_ITEMS.map((item) => (
            <NavButton
              key={item.href}
              to={`/${item.href}`}
              $active={isActive(item.href)}
              aria-current={isActive(item.href) ? 'location' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </NavButton>
          ))}
        </NavButtons>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
