import { useState, useEffect } from "react";

export default function RatingStars({ movieId }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`rating-${movieId}`);
    if (saved) setRating(Number(saved));
  }, [movieId]);

  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${movieId}`, value);
  };

  return (
    <div className="flex gap-1 text-yellow-400 text-xl cursor-pointer">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => handleRating(star)}>
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
