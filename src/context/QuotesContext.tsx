import { Dispatch, FC, ReactNode, createContext, useContext, useReducer } from "react";
import { initialState, quoteReducer } from "../reducers/quoteReducer";
import { QuotesState } from "../models/types/QuotesState";
import { QuotesAction } from "../models/types/QuotesAction";

type QuotesDispatch = Dispatch<QuotesAction>;

const QuotesContext = createContext<QuotesState | null>(null);
const QuotesDispatchContext = createContext<QuotesDispatch | null>(null);

export const QuotesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);

  return (
    <QuotesContext.Provider value={state}>
      <QuotesDispatchContext.Provider value={dispatch}>
        {children}
      </QuotesDispatchContext.Provider>
    </QuotesContext.Provider>
  );
};

export const useQuotes = () => {
  const context = useContext(QuotesContext);
  if (!context) {
    throw new Error('useQuotes must be used within a QuotesProvider');
  }
  return context;
}

export const useQuotesDispatch = (): QuotesDispatch => {
  const context = useContext(QuotesDispatchContext);
  if (!context) {
    throw new Error('useQuotesDispatch must be used within a QuotesDispatchProvider');
  }
  return context;
}