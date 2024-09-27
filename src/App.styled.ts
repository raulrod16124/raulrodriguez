import styled, { keyframes } from 'styled-components';

const colorChange = keyframes`
  0% {
    background: radial-gradient(circle, #ff6b6b, #ff4757);
  }
  25% {
    background: radial-gradient(circle, #ff4757, #ffa502);
  }
  50% {
    background: radial-gradient(circle, #ffa502, #2ed573);
  }
  75% {
    background: radial-gradient(circle, #2ed573, #1e90ff);
  }
  100% {
    background: radial-gradient(circle, #1e90ff, #ff6b6b);
  }
`;

export const ScreenWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* animation: ${colorChange} 10s infinite alternate;
    width: 100vw;
    height: 100vh;
    transition: 1s ease-in-out all; */
`;