import { QuotesActionType } from "../models/enums/QuoteActionsType";
import { Quote } from "../models/types/Quote";
import { QuotesAction } from "../models/types/QuotesAction";
import { QuotesState } from "../models/types/QuotesState";


export const initialState: QuotesState = {
  favorites: [],
  totFavorites: 0
}

export const quoteReducer = (state: QuotesState = initialState, action: QuotesAction): QuotesState => {
  switch (action.type) {
    case QuotesActionType.AddFavorite:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
        totFavorites: state.totFavorites + 1
      };
    case QuotesActionType.RemoveFavorite:
      return {
        ...state,
        favorites: state.favorites.filter((favorite: Quote) => favorite.id !== action.payload),
        totFavorites: state.totFavorites - 1
      };
    case QuotesActionType.AddNote:
      return {
        ...state,
        favorites: state.favorites.map((favorite: Quote) =>
          favorite.id === action.payload.quoteId ? { ...favorite, note: action.payload.note } : favorite
        ),
      }
    default:
      return state;
  }
}

