import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Quote } from "../models/types/Quote";
import QuoteCardContainer from "../containers/QuoteCardContainer";

type Props = {
  quote: Quote | null;
  refetch: () => Promise<void>
}

const RandomQuote: FC<Props> = ({ quote, refetch }) => {

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
        {quote &&
          <QuoteCardContainer quote={quote} />
        }
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