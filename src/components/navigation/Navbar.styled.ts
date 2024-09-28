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
    gap: 20px;
    padding: 5px 20px; 
    backdrop-filter: blur(10px);          
    -webkit-backdrop-filter: blur(10px);  
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(69, 77, 93, 0.2);
    border-radius: 50px;
`;

/* nav avatar */
export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

/* navbar button */
export const NavButtons= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NavButton= styled.div<{active:boolean}>`
    position: relative;
    background: ${props => props.active ? `2px solid ${theme.colors.secondary.main}` : "none"}; 
    color: ${props => props.active ? `${theme.colors.secondary.light}` : "white"};     
    font-family: ${theme.font.fontFamily};
    font-size: ${theme.font.fontSize};  
    padding: 15px 35px;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;

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

/* nav languages */
export const NavLanguages= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NavLanguage= styled.div`
    margin: 0 5px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {  
        color: ${theme.colors.secondary.light};
    }
`;