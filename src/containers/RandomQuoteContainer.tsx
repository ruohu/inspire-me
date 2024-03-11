import { FC, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { quotesApi } from "../services/quotesApi";
import RandomQuote from "../components/RandomQuote";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { Quote } from "../models/types/Quote";
import { RandomQuoteData } from "../models/interfaces/RandomQuoteData";

const RandomQuoteContainer: FC = () => {
  const { data, isLoading, error, fetchData } = useFetch<RandomQuoteData>(quotesApi.RANDOM);
  const [quoteData, setQuoteData] = useState<Quote | null>(null);

  useEffect(() => {
    if (data) {
      setQuoteData({
        id: data._id,
        content: data.content,
        author: data.author,
        tags: data.tags
      });
    }
  }, [data]);

  return (
    <>
      {isLoading
        ? <Loading />
        : error
          ? <ErrorMessage />
          : data
          && <RandomQuote quote={quoteData} refetch={fetchData} />
      }
    </>
  )
};

export default RandomQuoteContainer;
