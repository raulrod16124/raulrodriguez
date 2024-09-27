import styled from "styled-components";

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
    background-color: rgb(69, 77, 93);
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
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #f0a500;    
        transform: scale(1.1); 
    }
`;

/* navbar button */
export const NavbarButtons= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NavbarButton= styled.div`
    background: none; 
    border: 2px solid transparent;     
    color: white;     
    font-size: 12px;  
    font-weight: 600;
    padding: 5px 10px;
    cursor: pointer;
    transition: color 0.3s ease, border-bottom 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {  
        border-bottom: 2px solid #f0a500;
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