import styled from 'styled-components';
import theme from '../../theme/theme.json';
import {focusVisible} from '../shared/focusStyles';

interface OverlayProps {
  $isOpen: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing['md']};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition:
    opacity ${theme.transition.normal},
    visibility ${theme.transition.normal};
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  max-height: calc(100vh - ${theme.spacing['2xl']});
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.semantic.cardBorder};
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;

  ${theme.media.tablet} {
    max-height: 85vh;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing['md']} ${theme.spacing['lg']};
  border-bottom: 1px solid ${theme.colors.semantic.divider};
  flex-shrink: 0;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: ${theme.font.headings.h3.fontSize};
  font-weight: ${theme.font.headings.h3.fontWeight};
  color: ${theme.colors.neutral.lightGrey};
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['xs']};
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background-color: transparent;
  border: 1px solid ${theme.colors.semantic.cardBorder};
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.neutral.grey};
  cursor: pointer;
  transition:
    background-color ${theme.transition.fast},
    border-color ${theme.transition.fast},
    color ${theme.transition.fast};

  svg {
    font-size: 1.125rem;
  }

  &:hover {
    background-color: ${theme.colors.semantic.cardBackground};
    border-color: ${theme.colors.semantic.cardBorderHover};
    color: ${theme.colors.neutral.lightGrey};
  }

  ${focusVisible}
`;

export const PdfContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: ${theme.spacing['md']};
  background-color: ${theme.colors.neutral.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;

  .react-pdf__Page {
    margin: 0 auto;
  }

  .react-pdf__Page__canvas {
    max-width: 100% !important;
    height: auto !important;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${theme.colors.neutral.grey};
  font-size: ${theme.font.small.fontSize};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: ${theme.spacing['md']};
  color: ${theme.colors.neutral.grey};
  font-size: ${theme.font.small.fontSize};
`;

export const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing['xs']};
  padding: ${theme.spacing['xs']} ${theme.spacing['md']};
  font-size: ${theme.font.small.fontSize};
  font-weight: 500;
  font-family: ${theme.font.primary.fontFamily};
  color: ${theme.colors.accent.main};
  background-color: transparent;
  border: 1px solid ${theme.colors.semantic.accentBorder};
  border-radius: ${theme.borderRadius.sm};
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${theme.transition.fast},
    border-color ${theme.transition.fast};

  svg {
    font-size: 1rem;
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${theme.colors.semantic.accentBackgroundHover};
    border-color: ${theme.colors.accent.main};
  }

  ${focusVisible}
`;
