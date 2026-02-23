import React, { useState } from "react";
import api from "../api/api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/register", form);
    alert("Registered successfully");
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="form-control mb-2" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})} />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;