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

/* navbar logo */
export const NavbarLogo= styled.span`
    font-family: 'Arial', sans-serif; 
    font-size: 24px;                  
    font-weight: bold;                
    color: white;
    letter-spacing: 3px;              
    text-transform: uppercase;        
    cursor: pointer;
`;

/* navbar button */
export const NavButtons= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NavButton= styled.div<{active:boolean}>`
    background: ${props => props.active ? `2px solid ${theme.colors.primary.main}` : "none"}; 
    border: 2px solid transparent;     
    color: ${props => props.active ? `${theme.colors.primary.light}` : "white"};     
    font-size: ${theme.font.fontSize};  
    font-family: ${theme.font.fontFamily};
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.3s ease all;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {  
        border-bottom: 2px solid ${theme.colors.primary.main};
    }
    &:focus, &:active {  
        outline: none;
    }
`;

/* navbar languages */
export const NavbarLanguages= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NavbarLanguageButton= styled.button`
    margin: 0 5px;
    list-style: none;
    color: white;
`;