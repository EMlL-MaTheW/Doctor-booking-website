export default function Stepper({ step }) {
  const steps = ["Type", "Slot", "Details", "Confirm"];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((label, index) => (
        <div key={label} className="flex flex-col items-center w-full">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
            ${step >= index + 1 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"}`}
          >
            {index + 1}
          </div>
          <span className="text-xs mt-2 text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
}
