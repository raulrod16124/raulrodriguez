import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const ContactActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.sm};

  ${theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: ${theme.spacing.md};
  }
`;

export const ContactCvAction = styled.div`
  display: flex;
`;
