import { useState } from "react";
import moviesData from "../data/movies";
import MovieCard from "../components/MovieCard";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const filtered = moviesData.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre ? movie.genre === genre : true)
  );

  return (
    <div className="p-6">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
