import { Quote } from "./Quote";

export type QuotesState = {
  favorites: Quote[];
  totFavorites: number;
};