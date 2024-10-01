import { useLocation } from "react-router-dom";
import { 
    NavButton,
    NavButtons, 
    NavbarContainer, 
    NavbarWrapper, 
    NavButtonCurrentText, 
    NavButtonNewText 
} from "./Navbar.styled";

export const Navbar = () => {
    const { pathname } = useLocation();
    return (
        <NavbarWrapper data-testid="Navbar">
            <NavbarContainer>
                <NavButtons>
                    <NavButton
                        to={"home"}
                        active={pathname === "/home" || pathname === "/"}
                    >
                        <NavButtonCurrentText className="text-current">home</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">home</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        to={"about-me"}
                        active={pathname.split("/")[1] === "about-me"}
                    >
                        <NavButtonCurrentText className="text-current">about me</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">about me</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        to={"projects"}
                        active={pathname.split("/")[1] === "projects"}
                    >
                        <NavButtonCurrentText className="text-current">projects</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">projects</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        to={"contact"}
                        active={pathname.split("/")[1] === "contact"}
                    >
                        <NavButtonCurrentText className="text-current">contact</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">contact</NavButtonNewText>
                    </NavButton>
                </NavButtons>
            </NavbarContainer>
        </NavbarWrapper>
    )
}
