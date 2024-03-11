import { FC } from "react";
import { Card, CardActions, CardContent, IconButton, Snackbar, SnackbarContent, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteFilledIcon from "@mui/icons-material/Favorite";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Quote } from "../models/types/Quote";
import CardNoteContainer from "../containers/CardNoteContainer";

type Props = {
  quote: Quote;
  isFavorite: boolean;
  openSnackbar: boolean;
  enableNote?: boolean;
  addFavorite: (quote: Quote) => void;
  removeFavorite: (id: string) => void;
  handleCopyClick: (content: string, author: string) => void;
  handleCloseSnackbar: () => void;
}

const QuoteCard: FC<Props> = ({
  quote,
  isFavorite,
  openSnackbar,
  enableNote = false,
  addFavorite,
  removeFavorite,
  handleCopyClick,
  handleCloseSnackbar
}) => {

  return (
    <Card sx={{
      height: "100%",
      p: 2,
      textAlign: "center",
      display: "flex",
      justifyContent: "center"
    }}>
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
      }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {quote.content}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          - {quote.author}
        </Typography>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          {!isFavorite
            ? <Tooltip title="Add to Favorites">
              <IconButton aria-label="add to favorites" onClick={() => addFavorite(quote)}>
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </IconButton>
            </Tooltip>
            : <Tooltip title="Remove from Favorites">
              <IconButton aria-label="remove from favorites" onClick={() => removeFavorite(quote.id)}>
                <FavoriteFilledIcon></FavoriteFilledIcon>
              </IconButton>
            </Tooltip>
          }
          <Tooltip title="Click to copy">
            <IconButton aria-label="copy text" onClick={() => handleCopyClick(quote.content, quote.author)}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </Tooltip>
          <Snackbar
            open={openSnackbar}
            onClose={handleCloseSnackbar}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <SnackbarContent
              sx={{ display: "block", textAlign: "center" }}
              message={"Copied to clipboard"}
            />
          </ Snackbar>
        </CardActions>
        {
          enableNote
          && <CardNoteContainer quoteId={quote.id} />
        }
      </CardContent >
    </Card >
  )
}

export default QuoteCard