import './App.css'
import { Navigation } from './components/navigation/Navigation'
import { ScreenProvider } from './context/ScreenContext'
import { Home } from './screens/home/Home'

export const App = () => {
  return (
    <div className="App" data-testid="app">
      <Navigation />
      <ScreenProvider>
        <Home />
      </ScreenProvider>
    </div>
  )
}

