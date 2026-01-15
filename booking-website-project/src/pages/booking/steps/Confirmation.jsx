export default function Confirmation({ data }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">
        Booking Confirmed 🎉
      </h2>

      <div className="text-gray-600 space-y-2">
        <p><strong>Consultation:</strong> {data.consultationType}</p>
        <p><strong>Slot:</strong> {data.slot}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Contact:</strong> {data.contact}</p>
      </div>
    </div>
  );
}
