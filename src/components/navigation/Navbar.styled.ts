import styled from 'styled-components';
import theme from '../../theme/theme.json';
import {Link} from 'react-router-dom';
import {focusVisible} from '../shared/focusStyles';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${theme.spacing['sm']} ${theme.spacing['md']};
  padding-top: calc(
    ${theme.spacing['sm']} + env(safe-area-inset-top, 0px)
  );
  display: flex;
  justify-content: center;
  border-bottom: 1px solid transparent;
  transition:
    background-color ${theme.transition.normal},
    border-color ${theme.transition.normal},
    box-shadow ${theme.transition.normal};

  &[data-elevated='true'] {
    background-color: ${theme.colors.semantic.navbarBackdropStrong};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom-color: ${theme.colors.border};
    box-shadow: ${theme.boxShadow.navbarScrolled};
  }

  @supports not (
    (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))
  ) {
    &[data-elevated='true'] {
      background-color: ${theme.colors.surface};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${theme.media.tablet} {
    padding: ${theme.spacing['md']} ${theme.spacing['3xl']};
    padding-top: calc(
      ${theme.spacing['md']} + env(safe-area-inset-top, 0px)
    );

    &[data-elevated='true'] {
      background-color: transparent;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      border-bottom-color: transparent;
      box-shadow: none;
    }
  }
`;

export const NavbarContainer = styled.div<{$elevated: boolean}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${theme.borderRadius.md};
  padding: 0;
  background-color: transparent;
  border: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  transition:
    background-color ${theme.transition.normal},
    border-color ${theme.transition.normal},
    box-shadow ${theme.transition.normal};

  ${theme.media.tablet} {
    position: relative;
    justify-content: center;
    gap: ${theme.spacing['xxs']};
    backdrop-filter: ${({$elevated}) =>
      $elevated ? 'blur(16px)' : 'blur(12px)'};
    -webkit-backdrop-filter: ${({$elevated}) =>
      $elevated ? 'blur(16px)' : 'blur(12px)'};
    background-color: ${({$elevated}) =>
      $elevated
        ? theme.colors.semantic.navbarBackdropStrong
        : theme.colors.semantic.navbarBackdrop};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing['xxs']};
    width: auto;
    box-shadow: ${({$elevated}) =>
      $elevated ? theme.boxShadow.navbarScrolled : 'none'};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['xs']};
  flex-shrink: 0;
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

  ${focusVisible}

  ${theme.media.tablet} {
    display: none;
  }
`;

export const NavButtons = styled.div<{$isOpen: boolean}>`
  position: absolute;
  top: calc(100% + ${theme.spacing['xs']});
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
  box-shadow: ${theme.boxShadow.navbarScrolled};
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
    box-shadow: none;
    padding: 0 0 0 ${theme.spacing['xs']};
    max-height: none;
    overflow: visible;
    opacity: 1;
    transform: none;
    transition: none;
    pointer-events: auto;
    z-index: auto;
  }
`;

export const NavButton = styled(Link)<{$active: boolean}>`
  width: 100%;
  text-align: left;
  padding: ${theme.spacing['sm']} ${theme.spacing['md']};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.font.body.fontSize};
  border-left: ${props =>
    props.$active
      ? `3px solid ${theme.colors.accent.main}`
      : '3px solid transparent'};
  font-family: ${theme.font.primary.fontFamily};
  font-weight: ${props =>
    props.$active ? '500' : `${theme.font.navText.fontWeight}`};
  line-height: ${theme.font.navText.lineHeight};
  letter-spacing: ${theme.font.navText.letterSpacing};
  cursor: pointer;
  transition: all ${theme.transition.normal};
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  color: ${props =>
    props.$active ? theme.colors.neutral.white : theme.colors.neutral.grey};
  background-color: ${props =>
    props.$active ? theme.colors.semantic.navActiveBackground : 'transparent'};

  &:hover {
    color: ${theme.colors.neutral.white};
    background-color: ${theme.colors.semantic.navHoverBackground};
  }

  ${focusVisible}

  ${theme.media.tablet} {
    width: auto;
    text-align: center;
    padding: ${theme.spacing['xs']} ${theme.spacing['md']};
    border-radius: ${theme.borderRadius.lg};
    font-size: ${theme.font.navText.fontSize};
    border-left: none;
  }
`;
