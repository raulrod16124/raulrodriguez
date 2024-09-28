import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"
import { Avatar, NavButton, NavButtons, NavbarContainer, NavLanguage, NavLanguages, NavbarWrapper } from "./Navbar.styled";
import avatar from "../../assets/images/me.png";

export const Navbar = () => {
    const { screenType, setScreenType } = useContext(ScreenContext);

    return (
        <NavbarWrapper data-testid="Navbar">
            <NavbarContainer>
                <Avatar src={avatar} onClick={() => setScreenType("home")} />
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
                <NavLanguages>
                    <NavLanguage>es</NavLanguage>
                    <NavLanguage>en</NavLanguage>
                </NavLanguages>
            </NavbarContainer>
        </NavbarWrapper>
    )
}
