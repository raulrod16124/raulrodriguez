import styled from 'styled-components';
import theme from "../../../theme/theme.json";

export const ModalOverlay = styled.div`
    position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  max-width: 800px;
  max-height: 600px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const LargeImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${theme.colors.neutral.white};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${theme.colors.primary.main};
  }
`;