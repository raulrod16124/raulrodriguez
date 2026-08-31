import styled from 'styled-components';
import theme from '../../theme/theme.json';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 40px;
  display: flex;
  justify-content: center;

  @media (max-width: ${theme.responsive.largeMobileDevices}) {
    padding: 12px 16px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background-color: rgba(17, 17, 17, 0.8);
  border: 1px solid ${theme.colors.border};
  border-radius: 100px;
  padding: 4px;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const NavButton = styled(Link)<{ active: boolean }>`
  font-family: ${theme.font.primary.fontFamily};
  font-size: ${theme.font.fontSize};
  font-weight: ${props => (props.active ? '500' : '400')};
  padding: 8px 16px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: ${props =>
    props.active
      ? theme.colors.neutral.white
      : theme.colors.neutral.grey};
  background-color: ${props =>
    props.active
      ? 'rgba(255, 255, 255, 0.08)'
      : 'transparent'};

  &:hover {
    color: ${theme.colors.neutral.white};
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.secondary.main};
    outline-offset: 2px;
  }

  @media (max-width: ${theme.responsive.smallMobileDevices}) {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
`;
