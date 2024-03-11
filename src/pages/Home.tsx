
import { FC } from "react";
import RandomQuoteContainer from "../containers/RandomQuoteContainer";
import { Box, Container } from "@mui/material";
import FavoritesContainer from "../containers/FavoritesContainer";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "../components/ScrollTop";


const Home: FC = () => {

  return (
    <>
      <div>
        <Box sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <RandomQuoteContainer />
        </Box>
        <Box sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
        }}>
          <FavoritesContainer />
        </Box>
      </div >
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>

  )
};

export default Home;
