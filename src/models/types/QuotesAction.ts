import { QuotesActionType } from "../enums/QuoteActionsType";
import { Quote } from "./Quote";

export type QuotesAction =
  | { type: QuotesActionType.AddFavorite; payload: Quote }
  | { type: QuotesActionType.RemoveFavorite; payload: string };