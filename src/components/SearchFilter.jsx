export default function SearchFilter({ search, setSearch, genre, setGenre }) {
  return (
    <div className="flex gap-3 mb-5">
      <input
        placeholder="Search movie..."
        className="border p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">All</option>
         <option value="Movies">Movies</option>
         <option value="Episode">Episode</option>
         <option value="Series">Series</option> 

      </select>
    </div>
  );
}
