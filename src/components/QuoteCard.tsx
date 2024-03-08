import { FC } from "react";
import { Card, CardActions, CardContent, IconButton, Snackbar, Tooltip, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Quote } from "../models/types/Quote";

type Props = {
  quote: Quote;
  isFavorite: boolean;
  openSnackbar: boolean;
  addFavorite: (quote: Quote) => void;
  removeFavorite: (id: string) => void;
  handleCopyClick: (content: string, author: string) => void;
  handleCloseSnackbar: () => void;
}

const QuoteCard: FC<Props> = ({
  quote,
  isFavorite,
  openSnackbar,
  addFavorite,
  removeFavorite,
  handleCopyClick,
  handleCloseSnackbar
}) => {

  return (
    <Card>
      <CardContent>
        <Typography variant="body1" component="div">
          {quote.content}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          - {quote.author}
        </Typography>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
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
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            message="Copied to clipboard!"
          />
        </CardActions>
      </CardContent>
    </Card>


  )
}

export default QuoteCard