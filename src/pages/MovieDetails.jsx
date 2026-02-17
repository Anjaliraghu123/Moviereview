import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import RatingStars from "../components/RatingStars";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500">← Back</Link>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-72 rounded"
        />

        <div>
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <p>{movie.Year} • {movie.Genre}</p>
          <p className="mt-4">{movie.Plot}</p>
          <p className="mt-2">Cast: {movie.Actors}</p>

          <RatingStars movieId={movie.imdbID} />
        </div>
      </div>
    </div>
  );
}
