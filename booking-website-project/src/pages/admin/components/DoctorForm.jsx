import { useState, useEffect } from "react";

export default function DoctorForm({ onSave, onClose, initialData }) {
  const [form, setForm] = useState({
    name: "",
    specialty: "",
    experience: "",
    availability: "Available",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Doctor" : "Add Doctor"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Doctor Name"
            className="w-full border rounded-lg px-3 py-2"
            onChange={handleChange}
            value={form.name}
            required
          />

          <input
            name="specialty"
            placeholder="Specialty"
            className="w-full border rounded-lg px-3 py-2"
            onChange={handleChange}
            value={form.specialty}
            required
          />

          <input
            name="experience"
            type="number"
            placeholder="Experience (years)"
            className="w-full border rounded-lg px-3 py-2"
            onChange={handleChange}
            value={form.experience}
            required
          />

          <select
            name="availability"
            className="w-full border rounded-lg px-3 py-2"
            onChange={handleChange}
            value={form.availability}
          >
            <option>Available</option>
            <option>Not Available</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
