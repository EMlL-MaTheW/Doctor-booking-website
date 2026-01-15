import { useExperts } from "../../context/ExpertContext";
import { useState } from "react";

export default function DoctorManagement() {
  const { experts, toggleAvailability } = useExperts();
  const [sortKey, setSortKey] = useState("");

  const sortedExperts = [...experts].sort((a, b) => {
    if (!sortKey) return 0;
    return a[sortKey].localeCompare(b[sortKey]);
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Doctor Management
          </h1>

          <select
            className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="name">Name</option>
            <option value="specialty">Specialty</option>
            <option value="availability">Availability</option>
          </select>
        </div>

        {/* ===== Desktop Table ===== */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600">
                  Doctor
                </th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">
                  Specialty
                </th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">
                  Experience
                </th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 text-center font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {sortedExperts.map((expert) => (
                <tr
                  key={expert.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-4 font-medium text-gray-800">
                    {expert.name}
                  </td>

                  <td className="px-4 py-4 text-center">
                    {expert.specialty}
                  </td>

                  <td className="px-4 py-4 text-center">
                    {expert.experience} yrs
                  </td>

                  <td className="px-4 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        expert.availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {expert.availability}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => toggleAvailability(expert.id)}
                      className="px-4 py-1.5 text-xs rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                    >
                      Toggle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Mobile Cards ===== */}
        <div className="md:hidden space-y-4">
          {sortedExperts.map((expert) => (
            <div
              key={expert.id}
              className="border rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-semibold text-gray-800">
                  {expert.name}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    expert.availability === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {expert.availability}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                Specialty: <span className="font-medium">{expert.specialty}</span>
              </p>

              <p className="text-sm text-gray-600 mb-3">
                Experience: {expert.experience} yrs
              </p>

              <button
                onClick={() => toggleAvailability(expert.id)}
                className="w-full border rounded-lg py-2 text-sm hover:bg-gray-100 transition"
              >
                Toggle Availability
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// import { useExperts } from "../../context/ExpertContext";
// import { useState } from "react";

// export default function DoctorManagement() {
//   const { experts, toggleAvailability } = useExperts();
//   const [sortKey, setSortKey] = useState("");

//   const sortedExperts = [...experts].sort((a, b) => {
//     if (!sortKey) return 0;
//     return a[sortKey].localeCompare(b[sortKey]);
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto bg-white rounded shadow p-6">
//         <h1 className="text-2xl font-semibold mb-6">
//           Doctor Management
//         </h1>

//         {/* Sorting */}
//         <div className="mb-4">
//           <select
//             className="border px-3 py-2 rounded"
//             onChange={(e) => setSortKey(e.target.value)}
//           >
//             <option value="">Sort By</option>
//             <option value="name">Name</option>
//             <option value="specialty">Specialty</option>
//             <option value="availability">Availability</option>
//           </select>
//         </div>

//         {/* Doctor Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Name</th>
//                 <th className="border px-4 py-2">Specialty</th>
//                 <th className="border px-4 py-2">Experience</th>
//                 <th className="border px-4 py-2">Status</th>
//                 <th className="border px-4 py-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedExperts.map((expert) => (
//                 <tr key={expert.id} className="hover:bg-gray-50">
//                   <td className="border px-4 py-2">{expert.name}</td>
//                   <td className="border px-4 py-2 text-center">
//                     {expert.specialty}
//                   </td>
//                   <td className="border px-4 py-2 text-center">
//                     {expert.experience} yrs
//                   </td>
//                   <td className="border px-4 py-2 text-center">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm ${
//                         expert.availability === "Available"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {expert.availability}
//                     </span>
//                   </td>
//                   <td className="border px-4 py-2 text-center">
//                     <button
//                       onClick={() => toggleAvailability(expert.id)}
//                       className="text-sm text-indigo-600 hover:underline"
//                     >
//                       Toggle
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
