const slots = [
  "10:00 AM – 10:50 AM",
  "11:30 AM – 12:20 PM",
  "05:00 PM – 05:50 PM",
];

export default function SlotSelection({ data, setData, onNext, onBack, setError }) {
  return (
    <>
      <h2 className="font-semibold mb-4">Select date & time</h2>

      <div className="space-y-3">
        {slots.map((slot) => (
          <button
            key={slot}
            onClick={() => {
              setData({ ...data, slot });
              setError("");
            }}
            className={`w-full border rounded-lg py-2
            ${data.slot === slot ? "bg-orange-500 text-white" : ""}`}
          >
            {slot}
          </button>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <button onClick={onBack} className="w-1/2 border py-2 rounded">
          Back
        </button>
        <button
          onClick={() => (data.slot ? onNext() : setError("Please select a time slot"))}
          className="w-1/2 bg-orange-500 text-white py-2 rounded"
        >
          Continue
        </button>
      </div>
    </>
  );
}
