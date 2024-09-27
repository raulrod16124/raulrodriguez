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
                    <button className="nav-item" onClick={() => setScreenType("home")}>home</button>
                    <button className="nav-item" onClick={() => setScreenType("about")}>about</button>
                    <button className="nav-item" onClick={() => setScreenType("projects")}>projects</button>
                    <button className="nav-item" onClick={() => setScreenType("contact")}>contact</button>
                </ul>
                <div className="nav-language-items">
                    <button className="nav-language-item">es</button>
                    <button className="nav-language-item">en</button>
                </div>
            </div>
        </div>
    )
}
