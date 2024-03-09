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
    <>
      <Box style={{ height: "100vh" }}>
        <Typography>Random Quote</Typography>
        {quote &&
          <QuoteCardContainer quote={quote} />
        }
        <Button variant="contained" disableElevation
          onClick={() => refetch()}
        >
          Another One!
        </Button>
      </Box>
    </>
  )
};

export default RandomQuote;