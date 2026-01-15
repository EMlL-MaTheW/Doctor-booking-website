const categories = [
  "Therapist",
  "Psychiatrist",
  "Child & Youth Expert",
  "Couples Therapist",
];

export default function CategoryTabs() {
  return (
    <div className="flex gap-4 overflow-x-auto py-6">
      {categories.map((cat, i) => (
        <button
          key={i}
          className={`px-6 py-3 rounded-full border text-sm font-medium
          ${i === 0
            ? "bg-orange-500 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
