// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Experts from "./pages/Experts";
// import Experts from "./components/Experts";
// import ExpertProfile from "./pages/ExpertProfile";
// import Home from "./pages/Home";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/experts" element={<Experts />} />
//         <Route path="/experts/:id" element={<ExpertProfile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }



import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experts from "./components/Experts";
import ExpertProfile from "./pages/ExpertProfile";


export default function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/experts/:id" element={<ExpertProfile />} />
      </Routes>
    </>
  );
}


// import { Routes, Route, Navigate } from "react-router-dom";
// import Experts from "./components/Experts";
// import Home from "./pages/Home";


// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="home" element={<Navigate to="/experts" />} />

//       <Route path="/experts" element={<Experts />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/" element={<Home />} />
     
//     </Routes>
//   );
// }
