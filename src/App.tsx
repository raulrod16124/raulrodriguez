import { useContext } from 'react'
import { ScreenContext, ScreenProvider } from './context/ScreenContext'
import { Home } from './screens/home/Home'
import { About } from './screens/about/About'
import { Projects } from './screens/projects/Projects'
import { Contact } from './screens/contact/Contact'
import { Navbar } from './components/navigation/Navbar'

export const AppWrapper = () => {
  return (
    <ScreenProvider>
      <Navbar />
      <App />
    </ScreenProvider>
  )
}

export const App = () => {
  const { screenType } = useContext(ScreenContext);

  const screens: Record<string, JSX.Element> = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />
  }

  return (
    <div data-testid="app">
      {screens[screenType]}
    </div>
  )
}

