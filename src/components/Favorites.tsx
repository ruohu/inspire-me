import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { Quote } from "../models/types/Quote";

type Props = {
  favorites: Quote[];
  children: ReactElement;
}

const Favorites: FC<Props> = ({ favorites, children }) => {

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
        ? <> {children} </>
        : <Typography> No favorites quotes</Typography>
      }
    </Box>
  )
};

export default Favorites;
