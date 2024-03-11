import { FC } from "react"
import { useQuotes } from "../context/QuotesContext";
import Favorites from "../components/Favorites";
import { QuotesState } from "../models/types/QuotesState";


const FavoritesContainer: FC = () => {
  const state: QuotesState = useQuotes();

  return (
    <Favorites favorites={state.favorites} />
  )
}

export default FavoritesContainer