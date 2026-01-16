import { useState } from "react";
import { experts } from "../data/experts";
import ExpertCard from "../components/ExpertCard";
import Footer from "../pages/Footer";

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
    <>
    <div className="bg-[#fff7f1] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Our Experts
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search experts by name"
            className="shadow-lg bg-white hover:shadow-xl rounded-lg px-4 py-2 w-full md:w-1/2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="shadow-lg hover:shadow-xl bg-white rounded-lg px-4 py-2 w-full md:w-1/4"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option className="" value="All">All Specialties</option>
            <option value="Therapist">Therapist</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>
        </div>

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
    <Footer/>
    </>
  );
}

