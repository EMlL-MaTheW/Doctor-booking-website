export default function PatientDetails({
  data,
  setData,
  onNext,
  onBack,
  setLoading,
  setError,
}) {
  const submit = () => {
    if (!data.name || !data.contact) {
      setError("All fields are required");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onNext();
    }, 1500);
  };

  return (
    <>
      <h2 className="font-semibold mb-4">Patient details</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="border rounded w-full mb-3 px-3 py-2"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Email or Phone Number"
        className="border rounded w-full mb-4 px-3 py-2"
        value={data.contact}
        onChange={(e) => setData({ ...data, contact: e.target.value })}
      />

      <div className="flex gap-4">
        <button onClick={onBack} className="w-1/2 border py-2 rounded">
          Back
        </button>
        <button
          onClick={submit}
          className="w-1/2 bg-orange-500 text-white py-2 rounded"
        >
          Confirm
        </button>
      </div>
    </>
  );
}
