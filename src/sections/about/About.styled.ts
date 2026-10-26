import styled from 'styled-components';
import theme from '../../theme/theme.json';

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: ${theme.maxWidth.content};
`;

export const AboutParagraph = styled.p`
  margin: 0;
`;
