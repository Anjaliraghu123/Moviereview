import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-blue shadow rounded p-3 hover:scale-105 transition">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-60 w-full object-cover rounded"
        />
        <h2 className="font-bold mt-2">{movie.title}</h2>
        <p className="text-sm text-gray-600">
          {movie.year} • {movie.genre}
        </p>
      </Link>

      <RatingStars movieId={movie.id} />
    </div>
  );
}
