import React, { useState } from "react";
import api from "../api/api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="btn btn-success w-100">Login</button>
      </form>
       </div>
  );
}

export default Login;