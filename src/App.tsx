import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { QuotesProvider } from './context/QuotesContext';


function App() {

  return (
    <>
      <QuotesProvider>
        <Navbar />
        <Home />
      </QuotesProvider>
    </>
  )
}

export default App
