import { FC } from "react"
import { Quote } from "../models/types/Quote";
import QuoteCardContainer from "../containers/QuoteCardContainer";
import { Grid } from "@mui/material";

type Props = {
  quotes: Quote[];
  enableNote?: boolean;
}

const QuoteCardList: FC<Props> = ({ quotes, enableNote = false }) => {
  return (
    <>
      <Grid container spacing={3}>
        {quotes.map((quote: Quote, index) =>
          <Grid item key={index} xs={12} sm={6} md={4}>
            <QuoteCardContainer quote={quote} enableNote={enableNote} />
          </Grid>
        )}
      </Grid>

    </>
  );
}

export default QuoteCardList;