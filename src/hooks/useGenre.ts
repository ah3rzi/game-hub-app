import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";


export interface Genres {
  id: number;
  name: string;
}

interface FetchGenreData {
  count: number;
  results: Genres[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true)
    apiClient
      .get<FetchGenreData>("/genres", {signal : controller.signal})
      .then((res) => {
        setGenres(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message)
        setLoading(false)
    });

      return () => controller.abort();
  }, []);

  return {genres, error, isLoading};
}

export default useGenre;