import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow rounded p-3 hover:scale-105 transition">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
          className="h-60 w-full object-cover rounded"
        />

        <h2 className="font-bold mt-2">{movie.Title}</h2>
        <p className="text-sm text-gray-600">
          {movie.Year}
        </p>
      </Link>

      <RatingStars movieId={movie.imdbID} />
    </div>
  );
}
