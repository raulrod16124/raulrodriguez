import styled from 'styled-components';
import { Dialog, Skeleton } from '@raulrod/ui';
import theme from '../../theme/theme.json';

export const CvTrigger = styled(Dialog.Trigger)`
  align-self: flex-start;
  width: fit-content;
`;

export const CvDialogContent = styled(Dialog.Content)`
  width: min(900px, calc(100vw - 2rem));
  max-width: 900px;
  max-height: 85vh;
  padding: 0;
  gap: 0;
  overflow: hidden;
`;

export const CvDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.semantic.divider};
  flex-shrink: 0;

  ${theme.media.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${theme.spacing.lg};
  }
`;

export const CvDialogActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  flex-shrink: 0;
`;

export const CvDialogBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow-y: auto;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.neutral.darkGrey};

  .react-pdf__Page {
    margin: 0 auto;
  }

  .react-pdf__Page__canvas {
    max-width: 100% !important;
    height: auto !important;
  }
`;

export const CvSkeleton = styled(Skeleton)`
  display: block;
  width: min(100%, 720px);
  height: min(60vh, 560px);
`;

export const CvFallbackFrame = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 600px;
  border: 0;
  border-radius: ${theme.borderRadius.sm};
`;
