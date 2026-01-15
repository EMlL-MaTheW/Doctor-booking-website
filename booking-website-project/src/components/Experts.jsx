import { useState } from "react";
import { experts } from "../data/experts";
import ExpertCard from "../components/ExpertCard";

export default function Experts() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const filteredExperts = experts.filter((expert) => {
    const matchesName = expert.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSpecialty =
      specialty === "All" || expert.specialty === specialty;

    return matchesName && matchesSpecialty;
  });

  return (
    <div className="bg-[#fff7f3] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Our Experts
        </h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <input
            type="text"
            placeholder="Search experts by name"
            className="border rounded-lg px-4 py-2 w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Filter */}
          <select
            className="border rounded-lg px-4 py-2 w-full md:w-1/4"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="All">All Specialties</option>
            <option value="Therapist">Therapist</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>
        </div>

        {/* Expert Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.length > 0 ? (
            filteredExperts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))
          ) : (
            <p className="text-gray-500">
              No experts found.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}


// import CategoryTabs from "../components/CategoryTabs";
// import FilterBar from "../components/FilterBar";
// import ExpertCard from "../components/ExpertCard";
// import { experts } from "../data/experts";

// export default function Experts() {
//   return (
//     <div className="bg-[#fff7f3] min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">

//         <h1 className="text-2xl font-semibold text-center py-8">
//           Find an expert who understands your needs
//         </h1>

//         <CategoryTabs />
//         <FilterBar />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
//           {experts.map((expert) => (
//             <ExpertCard key={expert.id} expert={expert} />
//           ))}
//         </div>
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
//           {experts.map((expert) => (
//             <ExpertCard key={expert.id} expert={expert} />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// }
