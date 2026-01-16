import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide navbar on admin pages (optional – keep if needed)
  if (isAdminRoute) return null;

  return (
    <nav className="bg-white  shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          WeCare
        </Link>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <NavLink
            to="/experts"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Experts
          </NavLink>

          <span className="cursor-pointer hover:text-orange-500">
            Clinics
          </span>

          <span className="cursor-pointer hover:text-orange-500">
            Services
          </span>

          <span className="cursor-pointer hover:text-orange-500">
            About Us
          </span>

          {/* ✅ Admin visible for everyone */}
          <NavLink
            to="/admin/doctors"
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "hover:text-orange-500"
            }
          >
            Admin
          </NavLink>
        </div>

        {/* ===== Mobile Hamburger ===== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 text-sm font-medium text-gray-700">
          <NavLink
            to="/experts"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-500"
          >
            Experts
          </NavLink>

          <span className="block cursor-pointer hover:text-orange-500">
            Clinics
          </span>

          <span className="block cursor-pointer hover:text-orange-500">
            Services
          </span>

          <span className="block cursor-pointer hover:text-orange-500">
            About Us
          </span>

          {/* ✅ Admin visible for everyone */}
          <NavLink
            to="/admin/doctors"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-orange-500"
          >
            Admin
          </NavLink>
        </div>
      )}
    </nav>
  );
}


// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useState } from "react";

// export default function Navbar() {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/admin");
//   const isAdmin = localStorage.getItem("isAdmin");
//   const [menuOpen, setMenuOpen] = useState(false);

//   if (isAdminRoute) return null;

//   return (
//     <nav className="bg-white  shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-500">
//           WeCare
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
//           <NavLink
//             to="/experts"
//             className={({ isActive }) =>
//               isActive ? "text-orange-500" : "hover:text-orange-500"
//             }
//           >
//             Experts
//           </NavLink>

//           <span className="cursor-pointer hover:text-orange-500">
//             Clinics
//           </span>

//           <span className="cursor-pointer hover:text-orange-500">
//             Services
//           </span>

//           <span className="cursor-pointer hover:text-orange-500">
//             About Us
//           </span>

//           {isAdmin && (
//             <NavLink
//               to="/admin/doctors"
//               className={({ isActive }) =>
//                 isActive ? "text-orange-500" : "hover:text-orange-500"
//               }
//             >
//               Admin
//             </NavLink>
//           )}
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden focus:outline-none"
//         >
//           <svg
//             className="w-6 h-6 text-gray-700"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {menuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 text-sm font-medium text-gray-700">
//           <NavLink
//             to="/experts"
//             onClick={() => setMenuOpen(false)}
//             className="block hover:text-orange-500"
//           >
//             Experts
//           </NavLink>

//           <span className="block cursor-pointer hover:text-orange-500">
//             Clinics
//           </span>

//           <span className="block cursor-pointer hover:text-orange-500">
//             Services
//           </span>

//           <span className="block cursor-pointer hover:text-orange-500">
//             About Us
//           </span>

//           {isAdmin && (
//             <NavLink
//               to="/admin/doctors"
//               onClick={() => setMenuOpen(false)}
//               className="block hover:text-orange-500"
//             >
//               Admin
//             </NavLink>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }




