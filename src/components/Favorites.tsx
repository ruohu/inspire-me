import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Quote } from "../models/types/Quote";
import QuoteCardList from "./QuoteCardList";

type Props = {
  favorites: Quote[];
}

const Favorites: FC<Props> = ({ favorites }) => {

  return (
    <Box
      id="my-favorites"
      sx={{
        width: "100%",
        textAlign: "center",
        py: 5,
        px: 4,
        bgcolor: "secondary.main"
      }}
    >
      <Typography variant="h2" sx={{ my: 3 }}>My Favorites</Typography>
      {(favorites?.length > 0)
        ? <QuoteCardList quotes={favorites} enableNote={true} />
        : <Typography> No favorites quotes</Typography>
      }
    </Box>
  )
};

export default Favorites;
