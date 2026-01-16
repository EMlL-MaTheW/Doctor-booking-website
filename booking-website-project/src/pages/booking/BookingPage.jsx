import { useState } from "react";
import Stepper from "./Stepper";
import ConsultationType from "./steps/ConsultationType";
import SlotSelection from "./steps/SlotSelection";
import PatientDetails from "./steps/PatientDetails";
import Confirmation from "./steps/Confirmation";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [bookingData, setBookingData] = useState({
    consultationType: "",
    slot: "",
    name: "",
    contact: "",
  });

  return (
    <div className="min-h-screen bg-[#fff7f3] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-xl p-6">

        <h1 className="text-2xl font-semibold text-center mb-2">
          Book Appointment
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Complete the steps to schedule your session
        </p>

        <Stepper step={step} />

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {step === 1 && (
          <ConsultationType
            data={bookingData}
            setData={setBookingData}
            setError={setError}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <SlotSelection
            data={bookingData}
            setData={setBookingData}
            setError={setError}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <PatientDetails
            data={bookingData}
            setData={setBookingData}
            setError={setError}
            setLoading={setLoading}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}

        {step === 4 && <Confirmation data={bookingData} />}

        {loading && (
          <p className="text-center text-sm text-gray-500 mt-4">
            Submitting booking...
          </p>
        )}
      </div>
    </div>
  );
}
