
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

function ResetPassword() {
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await api.get(`/verify-token/${token}`);
        setValid(true);
      } catch (error) {
        setMessage("Invalid or Expired Token");
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post(`/reset-password/${token}`, { password });

      setMessage("Password Reset Successful!");
      setIsError(false);
      setPassword("");

    } catch (error) {
      setMessage("Password Reset Failed");
      setIsError(true);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        Validating token...
      </div>
    );
  }

  return (
    <div className="container mt-5 col-md-4">
      <h3>Reset Password</h3>

      {message && (
        <div
          className={`alert ${
            isError ? "alert-danger" : "alert-success"
          }`}
          role="alert"
        >
          {message}
        </div>
      )}

      {valid && (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="form-control mb-2"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn btn-danger w-100">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
