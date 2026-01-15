// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="shadow-lg bg-white border-b">
//       <div className="shadow-lg max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         <Link to="/" className="text-2xl font-bold text-orange-500">
//           amaha
//         </Link>

//         <div className="flex gap-6 text-sm font-medium text-gray-700">
//           <NavLink
//             to="/experts"
//             className={({ isActive }) =>
//               isActive ? "text-orange-500" : ""
//             }
//           >
//             Experts
//           </NavLink>
//           <span className="cursor-pointer">Clinics</span>
//           <span className="cursor-pointer">Services</span>
//           <span className="cursor-pointer">About Us</span>
//         </div>

//         <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm">
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// }

import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAdmin = localStorage.getItem("isAdmin");

  // Hide navbar on admin pages
  if (isAdminRoute) return null;

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          amaha
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm font-medium text-gray-700">
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

          {/* Admin link (only when logged in) */}
          {isAdmin && (
            <NavLink
              to="/admin/doctors"
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }
            >
              Admin
            </NavLink>
          )}
        </div>

        {/* Right Button */}
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600">
          Sign In
        </button>

      </div>
    </nav>
  );
}



