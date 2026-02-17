import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchFilter from "../components/SearchFilter";
import { searchMovies } from "../services/api";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      // ✅ default movies when empty
      const query = search.trim() === "" ? "marvel" : search;

      const data = await searchMovies(query);
      setMovies(data);
    };

    fetchMovies();
  }, [search]);

  return (
    <div className="p-6">
      <SearchFilter search={search} setSearch={setSearch} />

      {movies.length === 0 ? (
        <p className="text-center mt-10">No movies found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
