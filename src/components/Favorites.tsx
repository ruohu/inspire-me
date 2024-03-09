import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Quote } from "../models/types/Quote";
import QuoteCardList from "./QuoteCardList";

type Props = {
  favorites: Quote[];
}

const Favorites: FC<Props> = ({ favorites }) => {

  return (
    <Box id="my-favorites" style={{ height: "100vh" }}>
      <Typography>My Favorites</Typography>
      {(favorites?.length > 0)
        ? <QuoteCardList quotes={favorites} enableNote={true} />
        : <Typography> No favorites quotes</Typography>
      }
    </Box>
  )
};

export default Favorites;
