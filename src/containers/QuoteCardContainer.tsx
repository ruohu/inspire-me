import { FC, useEffect, useState } from 'react'
import { useQuotes, useQuotesDispatch } from '../context/QuotesContext';
import { QuotesActionType } from '../models/enums/QuoteActionsType';
import { Quote } from '../models/types/Quote';
import QuoteCard from '../components/QuoteCard';

type Props = {
  quote: Quote;
}

const QuoteCardContainer: FC<Props> = ({ quote }) => {
  const { favorites } = useQuotes();
  const dispatch = useQuotesDispatch();
  const [openCopySnackbar, setOpenCopySnackbar] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    setIsFavorite((favorites.find((favorite) => favorite.id === quote?.id) ? true : false));
  }, [favorites]);

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
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      handleCopyClick={handleCopyClick}
      handleCloseSnackbar={handleCloseSnackbar}
    />
  )
}

export default QuoteCardContainer;