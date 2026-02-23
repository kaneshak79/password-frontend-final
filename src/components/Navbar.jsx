import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Password Reset System</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/forgot-password">Forgot</Link></li>
          </ul>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;



// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">Password Reset Flow</Link>

//         <div>
//           <Link className="btn btn-outline-light me-2" to="/">
//             Home
//           </Link>
//           <Link className="btn btn-outline-light" to="/forgot-password">
//             Forgot Password
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function Home() {
//   return (
//     <div className="container mt-5 text-center">
//       <h2 className="mb-3">Password Reset System</h2>
//       <p className="text-muted">
//         Secure password recovery using email verification and token validation
//       </p>

//       <Link to="/forgot-password" className="btn btn-primary mt-3 px-4">
//         Reset Password
//       </Link>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
