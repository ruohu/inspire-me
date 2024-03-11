import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { QuotesProvider } from './context/QuotesContext';
import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import Footer from './components/Footer';
import { theme } from './themes/theme';


function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuotesProvider>
        <Navbar />
        <Toolbar id="back-to-top-anchor" />
        <Home />
        <Footer />
      </QuotesProvider>
    </ThemeProvider>



  )
}

export default App
