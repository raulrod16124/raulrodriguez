import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"
import { NavButton, NavButtons, NavbarContainer, NavbarWrapper, NavButtonCurrentText, NavButtonNewText } from "./Navbar.styled";

export const Navbar = () => {
    const { screenType, setScreenType } = useContext(ScreenContext);

    return (
        <NavbarWrapper data-testid="Navbar">
            <NavbarContainer>
                <NavButtons>
                    <NavButton
                        onClick={() => setScreenType("home")}
                        active={screenType === "home"}
                    >
                        <NavButtonCurrentText className="text-current">home</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">home</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("aboutme")}
                        active={screenType === "aboutme"}
                    >
                        <NavButtonCurrentText className="text-current">about me</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">about me</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("projects")}
                        active={screenType === "projects"}
                    >
                        <NavButtonCurrentText className="text-current">projects</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">projects</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("contact")}
                        active={screenType === "contact"}
                    >
                        <NavButtonCurrentText className="text-current">contact</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">contact</NavButtonNewText>
                    </NavButton>
                </NavButtons>
            </NavbarContainer>
        </NavbarWrapper>
    )
}
