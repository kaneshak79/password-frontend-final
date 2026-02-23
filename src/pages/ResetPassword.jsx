import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    api.get(`/verify-token/${token}`)
      .then(()=>setValid(true))
      .catch(()=>alert("Invalid or expired token"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(`/reset-password/${token}`, { password });
    alert("Password reset successful");
  };

  if(!valid) return <div className="text-center mt-5">Validating token...</div>;

  return (
     <div className="container mt-5 col-md-4">
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <input type="password" className="form-control mb-2" placeholder="New password" onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-danger w-100">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;