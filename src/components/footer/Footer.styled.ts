import styled from 'styled-components'
import theme from "../../theme/theme.json";

export const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
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
      color: ${theme.colors.secondary.main};
    }
  }
`;