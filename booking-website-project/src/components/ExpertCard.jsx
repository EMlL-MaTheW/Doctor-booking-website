import { useNavigate } from "react-router-dom";

export default function ExpertCard({ expert }) {
    const navigate = useNavigate();
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col">

      {/* Top section */}
      <div className="flex gap-4">
        {/* Image */}
        <img
          src={expert.image}
          alt={expert.name}
          className="w-28 h-28 object-cover rounded-xl"
        />

        {/* Basic info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {expert.name}
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            {expert.experience}+ years of experience
          </p>

          <p className="text-sm font-medium text-gray-800 mt-2">
            ₹{expert.price} for 50 mins
          </p>
        </div>
      </div>

      {/* Expertise */}
      <div className="mt-4">
        <p className="text-xs text-gray-500 mb-2">Expertise:</p>
        <div className="flex flex-wrap gap-2">
          {expert.expertise.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <p className="text-sm text-gray-600 mt-4">
        <span className="font-medium">Speaks:</span>{" "}
        {expert.languages.join(", ")}
      </p>

      {/* Availability */}
      <div className="mt-4">
        <p className="text-sm text-orange-500 font-medium">
          Available Online via:
        </p>

        <p className="text-sm text-gray-700 mt-1">
          🎥 Video, 🎧 Voice
        </p>

        <p className="text-sm mt-2">
          Next online slot:{" "}
          <span className="text-orange-500 font-medium">
            {expert.nextSlot}
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div onClick={() => navigate(`/experts/${expert.id}`)} className="mt-6 flex gap-3">
        <button className="flex-1 border border-gray-300 rounded-full py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
          View Profile
        </button>

        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2 text-sm font-medium transition">
          Book
        </button>
      </div>
    </div>
  );
}


// export default function ExpertCard({ expert }) {
//   return (
//     <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition flex flex-col">

//       {/* Image */}
//       <img
//         src={expert.image}
//         alt={expert.name}
//         className="w-full h-44 object-cover rounded-xl"
//       />

//       {/* Content */}
//       <div className="mt-4 flex-1">
//         {/* Name */}
//         <h3 className="text-lg font-semibold text-gray-800">
//           {expert.name}
//         </h3>

//         {/* Specialty */}
//         <p className="text-sm font-medium text-green-700 mt-1">
//           {expert.specialty}
//         </p>

//         {/* Experience */}
//         <p className="text-sm text-gray-600 mt-2">
//           {expert.experience}+ years of experience
//         </p>

//         {/* Languages */}
//         <p className="text-xs text-gray-500 mt-2">
//           Languages: {expert.languages.join(", ")}
//         </p>

//         {/* Availability */}
//         <div className="mt-3">
//           {expert.availability === "Available" ? (
//             <span className="inline-block text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
//               Available
//             </span>
//           ) : (
//             <span className="inline-block text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
//               Not Available
//             </span>
//           )}
//         </div>
//       </div>

//       {/* CTA */}
//       <button className="mt-4 w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white py-2 text-sm font-medium transition">
//         View Profile
//       </button>
//     </div>
//   );
// }

