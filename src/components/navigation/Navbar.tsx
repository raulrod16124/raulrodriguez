import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@raulrod/ui';
import { Menu, X } from '@raulrod/icons';
import {
  NavButton,
  NavButtons,
  NavbarActions,
  NavbarContainer,
  NavbarWrapper,
  HamburgerButton,
  LogoContainer,
} from './Navbar.styled';
import { Logo } from './logo';
import { LanguageToggle } from './language-toggle';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import { useSiteContent } from '../../i18n/useSiteContent';

const SECTION_BY_HREF: Record<string, string> = {
  '#work': 'work',
  '#experience': 'experience',
  '#about': 'about',
  '#contact': 'contact',
};

export const Navbar = () => {
  const { hash, pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const isScrolled = useScrolled();
  const isElevated = isScrolled || isMenuOpen;
  const { nav } = useSiteContent();

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
    <NavbarWrapper
      data-testid="Navbar"
      data-scrolled={isScrolled}
      data-elevated={isElevated}
      aria-label={nav.mainLabel}
    >
      <NavbarContainer $elevated={isElevated}>
        <LogoContainer>
          <Logo width={32} height={32} label={nav.homeLabel} />
        </LogoContainer>
        <NavButtons id="mobile-nav" $isOpen={isMenuOpen}>
          {nav.items.map((item) => (
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
        <NavbarActions>
          <LanguageToggle />
          <HamburgerButton as="div">
            <IconButton
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              label={isMenuOpen ? nav.closeMenu : nav.openMenu}
              variant="ghost"
              size="md"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </IconButton>
          </HamburgerButton>
        </NavbarActions>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
