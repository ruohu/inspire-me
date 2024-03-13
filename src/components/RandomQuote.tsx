import { FC, ReactElement } from "react";
import { Box, Button, Typography } from "@mui/material";

type Props = {
  refetch: () => Promise<void>;
  children: ReactElement;
}

const RandomQuote: FC<Props> = ({ refetch, children }) => {

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      p: 1
    }}>
      <Typography variant="h2">Random Quote</Typography>
      <Box sx={{ p: 2, width: "80%" }}>
        {children}
      </Box>
      <Button
        variant="contained"
        sx={{ my: 2 }}
        disableElevation
        onClick={() => refetch()}
      >
        Another One!
      </Button>
    </Box>
  )
};

export default RandomQuote;