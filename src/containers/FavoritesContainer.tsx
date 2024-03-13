import { FC } from "react"
import { useQuotes } from "../context/QuotesContext";
import Favorites from "../components/Favorites";
import { QuotesState } from "../models/types/QuotesState";
import QuoteCardList from "../components/QuoteCardList";


const FavoritesContainer: FC = () => {
  const state: QuotesState = useQuotes();

  return (
    <Favorites favorites={state.favorites}>
      <QuoteCardList quotes={state.favorites} enableNote={true} />
    </Favorites>
  )
}

export default FavoritesContainer