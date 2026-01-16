import { useExperts } from "../../context/ExpertContext";
import { useState } from "react";
import DoctorForm from "./components/DoctorForm"
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";


export default function DoctorManagement() {
  const {
    experts,
    toggleAvailability,
    addDoctor,
    updateDoctor,
  } = useExperts();

  const [sortKey, setSortKey] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);
  const navigate = useNavigate();

  const sortedExperts = [...experts].sort((a, b) => {
    if (!sortKey) return 0;
    return a[sortKey].localeCompare(b[sortKey]);
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Doctor Management
          </h1>

          <div className="flex gap-3">
            <select
              className="border rounded-lg px-4 py-2 text-sm"
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="specialty">Specialty</option>
              <option value="availability">Availability</option>
            </select>

            <button
              onClick={() => {
                setEditingDoctor(null);
                setShowForm(true);
              }}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm"
            >
              + Add Doctor
            </button>
          </div>
        </div>

        {/* ===== Desktop Table ===== */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Doctor</th>
                <th className="px-4 py-3 text-center">Specialty</th>
                <th className="px-4 py-3 text-center">Experience</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {sortedExperts.map((expert) => (
                <tr key={expert.id} className="border-b">
                  <td className="px-4 py-3 font-medium">
                    {expert.name}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {expert.specialty}
                  </td>

                  <td className="px-4 py-3 text-center">
                    {expert.experience} yrs
                  </td>

                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        expert.availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {expert.availability}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center space-x-2">
                    <button
                      onClick={() => {
                        setEditingDoctor(expert);
                        setShowForm(true);
                      }}
                      className="text-blue-600 text-xs hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => toggleAvailability(expert.id)}
                      className="text-xs border px-3 py-1 rounded-lg"
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
            <div key={expert.id} className="border rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <h2 className="font-semibold">{expert.name}</h2>
                <span className="text-xs">
                  {expert.availability}
                </span>
              </div>

              <p className="text-sm">Specialty: {expert.specialty}</p>
              <p className="text-sm mb-3">
                Experience: {expert.experience} yrs
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingDoctor(expert);
                    setShowForm(true);
                  }}
                  className="flex-1 border rounded-lg py-2 text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => toggleAvailability(expert.id)}
                  className="flex-1 border rounded-lg py-2 text-sm"
                >
                  Toggle
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showForm && (
          <DoctorForm
            initialData={editingDoctor}
            onClose={() => setShowForm(false)}
            onSave={(doctor) => {
              if (editingDoctor) {
                updateDoctor(doctor);
              } else {
                addDoctor({ ...doctor, id: uuid() });
              }
              setShowForm(false);
            }}
          />
        )}
      </div>
      <button onClick={() => navigate(`/`)}
         className="mt-3  bg-orange-500 text-white px-4 py-2 rounded-lg text-sm">
          Home
        </button>
    </div>
  );
}

