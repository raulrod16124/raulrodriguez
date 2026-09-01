import styled from 'styled-components';
import theme from '../../theme/theme.json';
import {Link} from 'react-router-dom';

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${theme.spacing['sm']} ${theme.spacing['md']};
  display: flex;
  justify-content: center;

  ${theme.media.tablet} {
    padding: ${theme.spacing['md']} ${theme.spacing['3xl']};
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  justify-content: flex-end;
  border-radius: ${theme.borderRadius.md};
  padding: 0;
  background-color: transparent;
  border: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;

  ${theme.media.tablet} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background-color: ${theme.colors.semantic.navbarBackdrop};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.pill};
    padding: ${theme.spacing['xxs']};
    width: auto;
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${theme.colors.neutral.grey};
  cursor: pointer;
  padding: ${theme.spacing['sm']} ${theme.spacing['md']};
  border-radius: ${theme.borderRadius.md};
  transition: color ${theme.transition.fast};
  min-height: 44px;
  min-width: 44px;

  &:hover {
    color: ${theme.colors.neutral.white};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.main};
    outline-offset: 2px;
  }

  ${theme.media.tablet} {
    display: none;
  }
`;

export const NavButtons = styled.div<{$isOpen: boolean}>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${theme.colors.surface};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: ${({$isOpen}) => ($isOpen ? theme.spacing['xs'] : '0')};
  max-height: ${({$isOpen}) => ($isOpen ? '400px' : '0')};
  overflow: hidden;
  opacity: ${({$isOpen}) => ($isOpen ? '1' : '0')};
  transform: translateY(${({$isOpen}) => ($isOpen ? '0' : '-8px')});
  transition:
    max-height 0.3s ease,
    opacity 0.25s ease,
    transform 0.25s ease,
    padding 0.3s ease;
  pointer-events: ${({$isOpen}) => ($isOpen ? 'auto' : 'none')};
  z-index: 101;

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.15s ease;
    transform: none;
  }

  ${theme.media.tablet} {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing['xxs']};
    background-color: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border: none;
    border-radius: 0;
    padding: 0;
    max-height: none;
    overflow: visible;
    opacity: 1;
    transform: none;
    transition: none;
    pointer-events: auto;
    z-index: auto;
  }
`;

export const NavButton = styled(Link)<{active: boolean}>`
  width: 100%;
  text-align: left;
  padding: ${theme.spacing['sm']} ${theme.spacing['md']};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.font.body.fontSize};
  border-left: ${props =>
    props.active
      ? `3px solid ${theme.colors.accent.main}`
      : '3px solid transparent'};
  font-family: ${theme.font.primary.fontFamily};
  font-weight: ${props =>
    props.active ? '500' : `${theme.font.navText.fontWeight}`};
  line-height: ${theme.font.navText.lineHeight};
  letter-spacing: ${theme.font.navText.letterSpacing};
  cursor: pointer;
  transition: all ${theme.transition.normal};
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  color: ${props =>
    props.active ? theme.colors.neutral.white : theme.colors.neutral.grey};
  background-color: ${props =>
    props.active ? theme.colors.semantic.navActiveBackground : 'transparent'};

  &:hover {
    color: ${theme.colors.neutral.white};
    background-color: ${theme.colors.semantic.navHoverBackground};
  }

  &:focus-visible {
    outline: 3px solid ${theme.colors.accent.main};
    outline-offset: 3px;
  }

  ${theme.media.tablet} {
    width: auto;
    text-align: center;
    padding: ${theme.spacing['xs']} ${theme.spacing['md']};
    border-radius: ${theme.borderRadius.pill};
    font-size: ${theme.font.navText.fontSize};
    border-left: none;
  }
`;
