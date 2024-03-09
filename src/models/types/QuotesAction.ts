import { QuotesActionType } from "../enums/QuoteActionsType";
import { Quote } from "./Quote";

type QuoteNote = {
  quoteId: string;
  note: string
}

export type QuotesAction =
  | { type: QuotesActionType.AddFavorite; payload: Quote }
  | { type: QuotesActionType.RemoveFavorite; payload: string }
  | { type: QuotesActionType.AddNote; payload: QuoteNote };