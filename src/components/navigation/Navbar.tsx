import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"
import { NavButton, NavButtons, NavbarContainer, NavbarLanguageButton, NavbarLanguages, NavbarLogo, NavbarWrapper } from "./Navbar.styled";

export const Navbar = () => {
    const { screenType, setScreenType } = useContext(ScreenContext);

    return (
        <NavbarWrapper data-testid="Navbar">
            <NavbarContainer>
                <NavbarLogo onClick={() => setScreenType("home")}>RR</NavbarLogo>
                <NavButtons>
                    <NavButton
                        onClick={() => setScreenType("home")}
                        active={screenType === "home"}
                    >
                        home
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("about")}
                        active={screenType === "about"}
                    >
                        about
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("projects")}
                        active={screenType === "projects"}
                    >
                        projects
                    </NavButton>
                    <NavButton
                        onClick={() => setScreenType("contact")}
                        active={screenType === "contact"}
                    >
                        contact
                    </NavButton>
                </NavButtons>
                <NavbarLanguages>
                    <NavbarLanguageButton>es</NavbarLanguageButton>
                    <NavbarLanguageButton>en</NavbarLanguageButton>
                </NavbarLanguages>
            </NavbarContainer>
        </NavbarWrapper>
    )
}
