import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          amaha
        </Link>

        {/* Menu */}
        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <NavLink
            to="/experts"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : ""
            }
          >
            Experts
          </NavLink>
          <span className="cursor-pointer">Clinics</span>
          <span className="cursor-pointer">Services</span>
          <span className="cursor-pointer">About Us</span>
        </div>

        {/* Button */}
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm">
          Sign In
        </button>
      </div>
    </nav>
  );
}


// // import { Link } from "react-router-dom";

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-blue-600 text-white p-4 flex justify-between">
// //       <h1 className="font-bold">HospitalCare</h1>
// //       <div className="space-x-4">
// //         <Link to="/">Home</Link>
// //         <Link to="/doctors">Doctors</Link>
// //         <Link to="/appointments">My Appointments</Link>
// //         <Link to="/login">Login</Link>
// //       </div>
// //     </nav>
// //   );
// // }

// import { Routes, Route, Navigate } from "react-router-dom";
// import Experts from "./pages/Experts";
// import Navbar from "./components/Navbar";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to="/experts" />} />
//         <Route path="/experts" element={<Experts />} />
//       </Routes>
//     </>
//   );
// }
