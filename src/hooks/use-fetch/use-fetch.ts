import { useState, useEffect } from "react";


const useFetch = <T>(fetcher: () => Promise<T>) => {

    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetcher();
          setData(response);
        } catch (err: unknown) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { data, isLoading, error };
}

export default useFetch;
