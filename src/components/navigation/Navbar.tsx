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
                        <NavButtonCurrentText className="text-current">Home</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">Home</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("about")}
                        active={screenType === "about"}
                    >
                        <NavButtonCurrentText className="text-current">About Me</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">About Me</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("projects")}
                        active={screenType === "projects"}
                    >
                        <NavButtonCurrentText className="text-current">Projects</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">Projects</NavButtonNewText>
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("contact")}
                        active={screenType === "contact"}
                    >
                        <NavButtonCurrentText className="text-current">Contact</NavButtonCurrentText>
                        <NavButtonNewText className="text-new">Contact</NavButtonNewText>
                    </NavButton>
                </NavButtons>
            </NavbarContainer>
        </NavbarWrapper>
    )
}
