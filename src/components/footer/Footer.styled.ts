import styled from 'styled-components'
import theme from "../../theme/theme.json";

export const FooterContainer = styled.footer`
    flex: 0 0 10vh;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 0.2rem 0 1rem 0;
    margin-top: 20px;
    flex-wrap: wrap;
    color: ${theme.colors.neutral.lightGrey};
    text-align: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
`;

export const CopyrightText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${theme.colors.neutral.grey};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;

  a {
    color: ${theme.colors.neutral.lightGrey};
    font-size: ${theme.font.icons.fontSize};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary.main};
    }
  }
`;