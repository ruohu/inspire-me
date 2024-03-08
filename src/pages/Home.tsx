
import { FC } from "react";
import RandomQuoteContainer from "../containers/RandomQuoteContainer";
import { Container } from "@mui/material";
import Favorites from "../components/Favorites";

const Home: FC = () => {

  return (
    <Container>
      <RandomQuoteContainer />
      <Favorites />
    </Container>

  )
};

export default Home;
