import { Navbar } from './components/navigation/Navbar'
import { AppContainer, GradientBackground, AmbientLayer, AmbientBlob, SkipLink, MainContent } from './App.styled'
import { Footer } from './components/footer/Footer'
import { Root } from './routes/Root'

export const App = () => {
  return (
    <GradientBackground>
      <AmbientLayer />
      <AmbientBlob />
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <Navbar />
      <MainContent id="main-content" data-testid="app">
        <AppContainer>
          <Root />
        </AppContainer>
      </MainContent>
      <Footer />
    </GradientBackground>
  )
}

