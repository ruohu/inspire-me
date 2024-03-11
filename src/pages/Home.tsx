
import { FC } from "react";
import RandomQuoteContainer from "../containers/RandomQuoteContainer";
import { Box } from "@mui/material";
import FavoritesContainer from "../containers/FavoritesContainer";

const Home: FC = () => {

  return (
    <>
      <Box sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <RandomQuoteContainer />
      </Box>
      <Box sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}>
        <FavoritesContainer />
      </Box>
    </>
  )
};

export default Home;
