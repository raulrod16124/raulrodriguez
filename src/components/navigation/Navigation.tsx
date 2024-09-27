import { useContext } from "react"
import "./Navigation.css"
import { ScreenContext } from "../../context/ScreenContext"

export const Navigation = () => {
    const { setScreenType } = useContext(ScreenContext);

    return (
        <div className='nav-wrapper' data-testid="navigation">
            <div className="nav-background" />
            <div className="nav-container">
                <div className="nav-logo-container" onClick={() => setScreenType("home")}>
                    <span className="nav-logo">logo</span>
                </div>
                <ul className="nav-items">
                    <li className="nav-item" onClick={() => setScreenType("home")}>home</li>
                    <li className="nav-item" onClick={() => setScreenType("about")}>about</li>
                    <li className="nav-item" onClick={() => setScreenType("projects")}>projects</li>
                    <li className="nav-item" onClick={() => setScreenType("contact")}>contact</li>
                </ul>
                <div className="nav-language-items">
                    <li className="nav-language-item">es</li>
                    <li className="nav-language-item">en</li>
                </div>
            </div>
        </div>
    )
}
