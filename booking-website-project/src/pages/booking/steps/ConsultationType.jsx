export default function ConsultationType({ data, setData, onNext, setError }) {
  const selectType = (type) => {
    setData({ ...data, consultationType: type });
    setError("");
  };

  return (
    <>
      <h2 className="font-semibold mb-4">Select consultation type</h2>

      <div className="grid grid-cols-2 gap-4">
        {["Online", "In-Person"].map((type) => (
          <button
            key={type}
            onClick={() => selectType(type)}
            className={`border rounded-lg py-3
            ${data.consultationType === type
              ? "bg-orange-500 text-white"
              : "hover:border-orange-500"}`}
          >
            {type}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          data.consultationType ? onNext() : setError("Please select a consultation type")
        }
        className="mt-6 w-full bg-orange-500 text-white py-2 rounded"
      >
        Continue
      </button>
    </>
  );
}
