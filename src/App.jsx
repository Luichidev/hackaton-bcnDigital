import { Home } from './pages/Home'
import { Resume } from './pages/resume'
import { Route } from 'wouter'
import { DataContextProvider } from './context/DataContext'

function App() {
  return (
    <main>
      <DataContextProvider>
        <Route component={Home} path="/" />
        <Route component={Resume} path="/resume" />
      </DataContextProvider>
    </main>
  )
}

export default App
