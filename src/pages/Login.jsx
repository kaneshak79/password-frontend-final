
import React, { useState } from "react";
import api from "../api/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", form);

      localStorage.setItem("token", res.data.token);

      setMessage("Login Successful!");
      setIsError(false);

      setForm({
        email: "",
        password: ""
      });

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Invalid Email or Password"
      );
      setIsError(true);
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>

      {message && (
        <div className={`alert ${isError ? "alert-danger" : "alert-success"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
