import { useParams } from "react-router-dom";
import { experts } from "../data/experts";

export default function ExpertProfile() {
  const { id } = useParams();
  const expert = experts.find((e) => e.id === id);

  if (!expert) {
    return <p className="text-center mt-10">Expert not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="flex items-center gap-6">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-28 h-28 rounded-full object-cover"
            />

            <div>
              <h1 className="text-2xl font-semibold">{expert.name}</h1>
              <p className="text-gray-600">{expert.title}</p>
              <p className="text-sm text-gray-500 mt-1">
                {expert.experience}+ years of experience
              </p>
            </div>
          </div>

          {/* Video placeholder */}
          <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            ▶ Intro Video
          </div>

          {/* Bio */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-700 leading-relaxed">
              {expert.bio}
            </p>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Languages</h2>
            <p className="text-gray-700">
              {expert.languages.join(", ")}
            </p>
          </div>
        </div>

        {/* RIGHT BOOKING CARD */}
        <div className="border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">
            Book a Session
          </h3>

          {/* Consultation Modes */}
          <p className="text-sm text-gray-600 mb-2">
            Consultation Mode
          </p>

          <div className="flex gap-3 mb-6">
            {expert.consultationModes.map((mode) => (
              <span
                key={mode}
                className="px-4 py-2 border rounded-lg text-sm font-medium"
              >
                {mode}
              </span>
            ))}
          </div>

          {/* Price */}
          <p className="text-sm text-gray-600 mb-4">
            50 mins session
          </p>

          <p className="text-xl font-semibold mb-6">
            ₹{expert.price} / session
          </p>

          {/* Slot */}
          <p className="text-sm mb-6">
            Next available slot:
            <span className="text-orange-500 font-medium">
              {" "}{expert.nextSlot}
            </span>
          </p>

          {/* CTA */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-medium">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
