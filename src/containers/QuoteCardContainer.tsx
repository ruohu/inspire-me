import { FC, useEffect, useState } from 'react'
import { useQuotes, useQuotesDispatch } from '../context/QuotesContext';
import { QuotesActionType } from '../models/enums/QuoteActionsType';
import { Quote } from '../models/types/Quote';
import QuoteCard from '../components/QuoteCard';

type Props = {
  quote: Quote;
  enableNote?: boolean;
}

const QuoteCardContainer: FC<Props> = ({
  quote,
  enableNote = false
}) => {
  const { favorites } = useQuotes();
  const dispatch = useQuotesDispatch();
  const [openCopySnackbar, setOpenCopySnackbar] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorite((favorites.find((favorite) => favorite.id === quote?.id) ? true : false));
  }, [quote.id, favorites]);

  const addFavorite = (quote: Quote) => {
    dispatch({
      type: QuotesActionType.AddFavorite,
      payload: quote
    });
  }

  const removeFavorite = (id: string) => {
    dispatch({
      type: QuotesActionType.RemoveFavorite,
      payload: id
    });
  }

  const handleCopyClick = (content: string, author: string) => {
    navigator.clipboard.writeText(`${content} -${author}`);
    setOpenCopySnackbar(true);
  }

  const handleCloseSnackbar = () => {
    setOpenCopySnackbar(false);
  }

  return (
    <QuoteCard
      quote={quote}
      isFavorite={isFavorite}
      openSnackbar={openCopySnackbar}
      enableNote={enableNote}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      handleCopyClick={handleCopyClick}
      handleCloseSnackbar={handleCloseSnackbar}
    />
  )
}

export default QuoteCardContainer;