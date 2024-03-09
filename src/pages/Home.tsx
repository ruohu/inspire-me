
import { FC } from "react";
import RandomQuoteContainer from "../containers/RandomQuoteContainer";
import { Container } from "@mui/material";
import FavoritesContainer from "../containers/FavoritesContainer";

const Home: FC = () => {

  return (
    <Container>
      <RandomQuoteContainer />
      <FavoritesContainer />
    </Container>

  )
};

export default Home;
