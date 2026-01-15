import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative bg-black text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604881991720-f91add269bed')",
        }}
      ></div>

      {/* Overlay */}
      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
          A mental healthcare ecosystem for the way we live, feel, and connect
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200">
          We follow the bio-psycho-social model because your body, mind,
          and environment shape how you feel. Our care supports every
          part of your life, not just symptoms.
        </p>

        <Link
          to="/experts"
          className="inline-block mt-8 bg-orange-500 px-8 py-3 rounded-full text-sm font-medium"
        >
          Find the right expert
        </Link>

        {/* Features */}
        <div className="flex gap-6 mt-10 text-sm text-gray-200 flex-wrap">
          <span>• For Every Age & Concern</span>
          <span>• In-person & Online</span>
          <span>• For Individuals & Families</span>
        </div>
      </div>
    </div>
  );
}
