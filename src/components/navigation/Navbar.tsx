import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"
import { NavbarButton, NavbarButtons, NavbarContainer, NavbarLanguageButton, NavbarLanguages, NavbarLogo, NavbarWrapper } from "./Navbar.styled";

export const Navbar = () => {
    const { screenType, setScreenType } = useContext(ScreenContext);

    const getActiveButtonStyles = (screen: string) => {
        return screenType === screen ? {
            color: "#f0a500",
            backgroundColor: "2px solid #f0a500",
            transition: "0.5s ease-out all"
        } : {}
    }

    return (
        <NavbarWrapper data-testid="Navbar">
            <NavbarContainer>
                <NavbarLogo onClick={() => setScreenType("home")}>RR</NavbarLogo>
                <NavbarButtons>
                    <NavbarButton
                        onClick={() => setScreenType("home")}
                        style={getActiveButtonStyles("home")}
                    >
                        home
                    </NavbarButton>
                    <NavbarButton
                        onClick={() => setScreenType("about")}
                        style={getActiveButtonStyles("about")}
                    >
                        about
                    </NavbarButton>
                    <NavbarButton
                        onClick={() => setScreenType("projects")}
                        style={getActiveButtonStyles("projects")}
                    >
                        projects
                    </NavbarButton>
                    <NavbarButton
                        onClick={() => setScreenType("contact")}
                        style={getActiveButtonStyles("contact")}
                    >
                        contact
                    </NavbarButton>
                </NavbarButtons>
                <NavbarLanguages>
                    <NavbarLanguageButton>es</NavbarLanguageButton>
                    <NavbarLanguageButton>en</NavbarLanguageButton>
                </NavbarLanguages>
            </NavbarContainer>
        </NavbarWrapper>
    )
}
