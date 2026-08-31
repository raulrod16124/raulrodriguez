import styled from 'styled-components';
import theme from '../../theme/theme.json';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${theme.spacing['md']} ${theme.spacing['3xl']};
  display: flex;
  justify-content: center;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    padding: ${theme.spacing['sm']} ${theme.spacing['md']};
  }
`;

export const NavbarContainer = styled.div`
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

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    width: 100%;
    justify-content: flex-end;
    border-radius: ${theme.borderRadius.md};
    padding: 0;
    background-color: transparent;
    border: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
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

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    display: flex;
  }
`;

export const NavButtons = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: ${theme.spacing['xs']};
    flex-direction: column;
    align-items: stretch;
    background-color: ${theme.colors.surface};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    padding: ${({ $isOpen }) => ($isOpen ? theme.spacing['xs'] : '0')};
    max-height: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
    overflow: hidden;
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    transition:
      max-height 0.3s ease,
      opacity 0.2s ease,
      padding 0.3s ease;
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  }
`;

export const NavButton = styled(Link)<{ active: boolean }>`
  font-family: ${theme.font.primary.fontFamily};
  font-size: ${theme.font.navText.fontSize};
  font-weight: ${props => (props.active ? '500' : `${theme.font.navText.fontWeight}`)};
  line-height: ${theme.font.navText.lineHeight};
  letter-spacing: ${theme.font.navText.letterSpacing};
  padding: ${theme.spacing['xs']} ${theme.spacing['md']};
  border-radius: ${theme.borderRadius.pill};
  cursor: pointer;
  transition: all ${theme.transition.normal};
  text-decoration: none;
  white-space: nowrap;
  color: ${props =>
    props.active
      ? theme.colors.neutral.white
      : theme.colors.neutral.grey};
  background-color: ${props =>
    props.active
      ? theme.colors.semantic.navActiveBackground
      : 'transparent'};

  &:hover {
    color: ${theme.colors.neutral.white};
    background-color: ${theme.colors.semantic.navHoverBackground};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent.main};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    width: 100%;
    text-align: left;
    padding: ${theme.spacing['sm']} ${theme.spacing['md']};
    border-radius: ${theme.borderRadius.sm};
    font-size: ${theme.font.body.fontSize};
  }
`;
