import { useEffect, useState } from "react";
import { getMovies } from "../api";
import type { Movie } from "../core/types";

const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const movies = await getMovies();
      setIsLoading(false);
      setMovies(movies);
    } catch (err) {
      setError("Erro ao buscar filmes. Tente novamente");
      console.error("Error fetching movies: ", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, isLoading, error };
};

export default useFetchMovies;
