import { createContext, useState } from 'react'

// const ScreenType = ["home", "about", "projects", "contact"]
// type ScreenType = typeof ScreenType;

interface IScreenContextProps {
    screenType: string;
    setScreenType: (screen: string) => void;
}

interface IScreenProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const ScreenContext = createContext({} as IScreenContextProps)

export const ScreenProvider = ({children}: IScreenProviderProps) => {
    const [screenType, setScreenType] = useState("home");

    return (
        <ScreenContext.Provider value={{
            screenType,
            setScreenType
        }}>
            {children}
        </ScreenContext.Provider>
    )
}
