import React, { useState } from "react";
import api from "../api/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/forgot-password", { email });
    alert("Reset link sent to email");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
        <button className="btn btn-warning w-100">Send Reset Link</button>
      </form>
    </div>
     );
}

export default ForgotPassword;