//import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  //  Axios
  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response: AxiosResponse = await axios.get(url);
  //     setData(response.data);
  //   } catch (err: any) {
  //     console.error("error ", err);
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // Fetch
  // const fetchData = () => {
  //   setIsLoading(true);
  //   fetch(url)
  //     .then((response: Response) => {
  //       if (!response.ok) {
  //         throw new Error(`Request failed with status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data: T) => setData(data))
  //     .catch((err: any) => setError(err))
  //     .finally(() => setIsLoading(false));
  // }

  // Fetch with async/await
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response: Response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data: T = await response.json();
      setData(data);
    } catch (err: any) {
      console.error("error ", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, error, fetchData };

}
