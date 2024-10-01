import { useContext } from 'react'
import { ScreenContext, ScreenProvider } from './context/ScreenContext'
import { Home } from './screens/home/Home'
import { AboutMe } from './screens/about/AboutMe'
import { Projects } from './screens/projects/Projects'
import { Contact } from './screens/contact/Contact'
import { Navbar } from './components/navigation/Navbar'
import { AppContainer, GradientBackground } from './App.styled'
import { Footer } from './components/footer/Footer'

export const AppWrapper = () => {
  return (
    <ScreenProvider>
      <GradientBackground>
        <Navbar />
        <App />
        <Footer />
      </GradientBackground>
    </ScreenProvider>
  )
}

export const App = () => {
  const { screenType } = useContext(ScreenContext);

  const screens: Record<string, JSX.Element> = {
    home: <Home />,
    about_me: <AboutMe />,
    projects: <Projects />,
    contact: <Contact />
  }

  return (
    <AppContainer data-testid="app">
      {screens[screenType]}
    </AppContainer>
  )
}

