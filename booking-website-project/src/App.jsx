
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Experts from "./components/Experts";
// import ExpertProfile from "./pages/ExpertProfile";
// import BookingPage from "./pages/booking/BookingPage";
// import './app.css'

// export default function App() {
//   return (
//     <>
//       <Navbar/>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/experts" element={<Experts />} />
//         <Route path="/experts/:id" element={<ExpertProfile />} />

//         <Route path="/book/:id" element={<BookingPage />} />
//       </Routes>
//     </>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experts from "./components/Experts";
import ExpertProfile from "./pages/ExpertProfile";
import BookingPage from "./pages/booking/BookingPage";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import DoctorManagement from "./pages/admin/DoctorManagement";

// Context
import { ExpertProvider } from "./context/ExpertContext";

import "./app.css";

// Admin route protection
const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin");
  return isAdmin ? children : <Navigate to="/admin/login" />;
};

export default function App() {
  return (
    <ExpertProvider>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/experts/:id" element={<ExpertProfile />} />
        <Route path="/book/:id" element={<BookingPage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/doctors"
          element={
            <AdminRoute>
              <DoctorManagement />
            </AdminRoute>
          }
        />
      </Routes>
    </ExpertProvider>
  );
}
