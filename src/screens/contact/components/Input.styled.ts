import styled, { css } from 'styled-components';
import theme from "../../../theme/theme.json";

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
`;

export const SharedInputStyles = css`
  width: 85%;
  padding: 15px;
  padding-top: 20px;
  font-size: 1rem;
  color: ${theme.colors.neutral.white};
  background-color: transparent;
  border: 1px solid ${theme.colors.neutral.grey};
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary.main};
  }
`;

export const StyledInput = styled.input`
  ${SharedInputStyles}
`;

export const StyledTextarea = styled.textarea`
  ${SharedInputStyles}
  resize: vertical;
`;

export const FloatingLabel = styled.label<{isfocusedorfilled: boolean}>`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  background-color: transparent;
  color: ${theme.colors.neutral.white};
  font-size: 1rem;
  transition: all 0.3s ease;

  ${({ isfocusedorfilled }) =>
    isfocusedorfilled &&
    css`
      top: 0px;
      left: 10px;
      font-size: 1rem;
      color: ${theme.colors.primary.main};
      z-index: 200;
      background-color: ${theme.colors.neutral.darkGrey};
    `}
`;