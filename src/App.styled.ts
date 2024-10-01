import styled from 'styled-components';
import theme from "./theme/theme.json";

export const GradientBackground = styled.div`
  background: radial-gradient(circle at center, 
    ${theme.colors.tertiary.light} 0%, 
    ${theme.colors.tertiary.main} 40%, 
    ${theme.colors.tertiary.dark} 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.neutral.white};
  font-family: ${theme.font.primary.fontFamily};
  min-height: 100vh;

  @media (max-width: ${theme.responsive.laptops}) {
    align-items: flex-start;
  }
`;