import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let response: AxiosResponse = await axios.get(url);
      setData(response.data);
    } catch (err: any) {
      console.error("error ", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, fetchData };

}
