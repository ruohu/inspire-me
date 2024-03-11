import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { QuotesProvider } from "./context/QuotesContext";
import { CssBaseline, Fab, ThemeProvider, Toolbar } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Footer from "./components/Footer";
import { theme } from "./themes/theme";
import ScrollTop from "./components/ScrollTop";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuotesProvider>
        <Navbar />
        <Toolbar id="back-to-top-anchor" />
        <Home />
        <Footer />
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </QuotesProvider>
    </ThemeProvider>
  )
}

export default App
