import styled, { keyframes } from "styled-components";
import theme from "../../theme/theme.json"

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const NavbarWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 20px auto 0 auto;
    width: fit-content;
    max-width: 1160px;
    border-radius: 50px;
    z-index: 1;
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 20px 0 10px; 
    backdrop-filter: blur(10px);          
    -webkit-backdrop-filter: blur(10px);  
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(69, 77, 93, 0.2);
    border-radius: 50px;
`;

/* navbar button */
export const NavButtons= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NavButton= styled.div<{active:boolean}>`
    position: relative;
    font-family: ${theme.font.primary.fontFamily};
    font-size: ${props => props.active ? `18px` : `${theme.font.fontSize}`};
    margin: 0 1px;
    padding: 15px ${props => props.active ? `40px` : `35px`};
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;
    color: ${props => props.active ? `${theme.colors.secondary.main}` : "white"}; 
    text-shadow: 
    ${props => props.active ? `
       0.8px 0.8px 0 ${theme.colors.neutral.white}}, 
      -0.8px -0.8px 0 ${theme.colors.neutral.white}},
      -0.8px 0.8px 0 ${theme.colors.neutral.white}}, 
      0.8px -0.8px 0 ${theme.colors.neutral.white}} 
    ` : "none"};

    &:hover .text-current {
        animation: ${props => props.active ? keyframes`` : slideUp} 0.4s forwards;
    }

    &:hover .text-new {
        animation:  ${props => props.active ? keyframes`` : slideDown} 0.4s forwards;
        color: ${theme.colors.secondary.light};
    }

    &:focus, &:active {  
        outline: none;
    }
`;

export const NavButtonCurrentText = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(0);
  transition: transform 0.4s ease-in-out;
`;

export const NavButtonNewText = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(100%);
  transition: transform 0.4s ease-in-out;
`;