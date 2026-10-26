import { Navbar } from './components/navigation/Navbar'
import { AppContainer, GradientBackground, AmbientLayer, AmbientBlob, SkipLink, MainContent } from './App.styled'
import { Footer } from './components/footer/Footer'
import { Root } from './routes/Root'
import { useSiteContent } from './i18n/useSiteContent'

export const App = () => {
  const { common } = useSiteContent()

  return (
    <GradientBackground>
      <AmbientLayer />
      <AmbientBlob />
      <SkipLink href="#main-content">{common.skipToMain}</SkipLink>
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
