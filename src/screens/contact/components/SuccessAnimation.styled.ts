import styled, {keyframes} from 'styled-components';
import {FaCheck} from 'react-icons/fa';
import theme from '../../../theme/theme.json';

const fadeInAndScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const SuccessMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  margin: auto 0;
  animation: ${fadeInAndScale} 0.8s ease-in-out forwards;
`;

export const CheckIcon = styled(FaCheck)`
  color: ${theme.colors.success};
  font-size: 4rem;
  animation: ${bounce} 1.5s ease infinite;
`;

export const SuccessText = styled.p`
  font-size: ${theme.font.text.fontSize};
  color: ${theme.colors.neutral.white};
  margin-top: 10px;
  text-align: center;
`;
