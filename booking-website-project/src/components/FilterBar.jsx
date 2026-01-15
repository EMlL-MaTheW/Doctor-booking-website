const filters = ["Select Centre", "Expertise", "Languages", "Price", "Gender"];

export default function FilterBar() {
  return (
    <div className="flex gap-3 flex-wrap my-6">
      {filters.map((filter, i) => (
        <button
          key={i}
          className="px-4 py-2 border rounded-full text-sm text-gray-600 hover:bg-gray-100"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
