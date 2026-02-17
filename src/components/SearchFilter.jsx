export default function SearchFilter({ search, setSearch, }) {
  return (
    <div className="flex gap-3 mb-5">
      <input
        placeholder="Search movie..."
        className="border p-2 rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
    </div>
  );
}
