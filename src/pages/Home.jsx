import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchFilter from "../components/SearchFilter";
import { searchMovies } from "../services/api";

export default function Home() {
  const [search, setSearch] = useState("batman");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovies(search);
      setMovies(data);
    };

    fetchMovies();
  }, [search]);

  return (
    <div className="p-6">
      <SearchFilter search={search} setSearch={setSearch} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
