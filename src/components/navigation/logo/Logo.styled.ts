import styled from 'styled-components';
import theme from '../../../theme/theme.json';
import {Link} from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-shrink: 0;
  cursor: pointer;
  transition: filter ${theme.transition.normal};

  &:hover {
    filter: brightness(1.3)
      drop-shadow(0 0 8px ${theme.colors.semantic.accentBorder});
  }

  &:active {
    filter: brightness(1.5) drop-shadow(0 0 12px ${theme.colors.accent.main});
  }

  ${theme.media.tablet} {
    padding-right: ${theme.spacing['xs']};
    border-right: 1px solid ${theme.colors.border};
  }
`;

export const LogoSvg = styled.svg<{$width: number; $height: number}>`
  width: ${({$width}) => `${$width}px`};
  height: ${({$height}) => `${$height}px`};
  transition: filter ${theme.transition.normal};

  ${theme.media.tablet} {
    width: ${({$width}) => `${$width + 6}px`};
    height: ${({$height}) => `${$height + 8}px`};
  }
`;
