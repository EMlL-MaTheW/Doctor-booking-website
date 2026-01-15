import { useNavigate } from "react-router-dom";

export default function ExpertCard({ expert }) {
    const navigate = useNavigate();
  return (
    <div className="card bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl transition flex flex-col">

      <div className="flex gap-4">
        <img
          src={expert.image}
          alt={expert.name}
          className="w-28 h-28 object-cover rounded-xl"
        />

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

      <p className="text-sm text-gray-600 mt-4">
        <span className="font-medium">Speaks:</span>{" "}
        {expert.languages.join(", ")}
      </p>

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

      <div  className="mt-6 flex gap-3">
        <button onClick={() => navigate(`/experts/${expert.id}`)} 
         className="cursor-pointer flex-1 border border-gray-300 rounded-full py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
          View Profile
        </button>

        <button onClick={() => navigate(`/book/${expert.id}`)}
         className="cursor-pointer flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2 text-sm font-medium transition">
          Book
        </button>
      </div>
    </div>
  );
}

