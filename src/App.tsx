import { Navbar } from './components/navigation/Navbar'
import { AppContainer, GradientBackground } from './App.styled'
import { Footer } from './components/footer/Footer'
import { pages, Root } from './routes/Root'
import { ErrorPage } from './screens/error-page/ErrorPage'
import { useLocation } from 'react-router-dom'

export const App = () => {
  const { pathname } = useLocation();
  const wrongPathname = !pages.includes(pathname.split("/")[1]);

  if (wrongPathname) {
    return (
      <GradientBackground>
        <ErrorPage />
      </GradientBackground>
    );
  }

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

