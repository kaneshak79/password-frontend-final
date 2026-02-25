// import React, { useState } from "react";
// import api from "../api/api";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await api.post("/forgot-password", { email });
//     alert("Reset link sent to email");
//   };

//   return (
//     <div className="container mt-5 col-md-4">
//       <h3>Forgot Password</h3>
//       <form onSubmit={handleSubmit}>
//         <input className="form-control mb-2" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
//         <button className="btn btn-warning w-100">Send Reset Link</button>
//       </form>
//     </div>
//      );
// }

// export default ForgotPassword;


import React, { useState } from "react";
import api from "../api/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/forgot-password", { email });

      setMessage(res.data.message || "Reset link sent to email!");
      setIsError(false);
      setEmail("");

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to send reset link"
      );
      setIsError(true);
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Forgot Password</h3>

      {message && (
        <div className={`alert ${isError ? "alert-danger" : "alert-success"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn btn-warning w-100">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;