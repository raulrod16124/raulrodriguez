import { useContext } from "react"
import { ScreenContext } from "../../context/ScreenContext"
import "./Navbar.css"

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
        <div className='navbar-wrapper' data-testid="Navbar">
            <div className="navbar-background" />
            <div className="navbar-container">
                <span className="navbar-logo" onClick={() => setScreenType("home")}>RR</span>
                <ul className="navbar-buttons">
                    <button 
                        className="navbar-button" 
                        onClick={() => setScreenType("home")}
                        style={getActiveButtonStyles("home")}
                    >
                        home
                    </button>
                    <button 
                        className="navbar-button" 
                        onClick={() => setScreenType("about")}
                        style={getActiveButtonStyles("about")}
                    >
                        about
                    </button>
                    <button 
                        className="navbar-button" 
                        onClick={() => setScreenType("projects")}
                        style={getActiveButtonStyles("projects")}
                    >
                        projects
                    </button>
                    <button 
                        className="navbar-button" 
                        onClick={() => setScreenType("contact")}
                        style={getActiveButtonStyles("contact")}
                    >
                        contact
                    </button>
                </ul>
                <div className="navbar-language-items">
                    <button className="navbar-language-item">es</button>
                    <button className="navbar-language-item">en</button>
                </div>
            </div>
        </div>
    )
}
