import styled from "styled-components";
import theme from "../../theme/theme.json"

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
    background: ${props => props.active ? `2px solid ${theme.colors.secondary.main}` : "none"}; 
    border: 2px solid transparent;     
    color: ${props => props.active ? `${theme.colors.secondary.light}` : "white"};     
    font-size: ${theme.font.fontSize};  
    font-family: ${theme.font.fontFamily};
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.3s ease all;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {  
        border-bottom: 2px solid ${theme.colors.secondary.main};
    }
    &:focus, &:active {  
        outline: none;
    }
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