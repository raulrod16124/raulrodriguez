import { Navbar } from './components/navigation/Navbar'
import { AppContainer, GradientBackground } from './App.styled'
import { Footer } from './components/footer/Footer'
import { Root } from './routes/Root'

export const App = () => {
  return (
    <GradientBackground>
      <Navbar />
      <AppContainer data-testid="app">
        <Root />
      </AppContainer>
      <Footer />
    </GradientBackground>
  )
}

