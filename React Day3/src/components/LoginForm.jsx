import React, { useState } from "react";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function generateCaptcha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const refreshCaptcha = () => {
    setGeneratedCaptcha(generateCaptcha());
    setCaptcha("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (captcha !== generatedCaptcha) {
      setError("Forbidden access is denied (Invalid Captcha).");
      return;
    }

    setSuccess("OTP Requested Successfully!");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="captcha-box">
          <span className="captcha-text">{generatedCaptcha}</span>
          <button type="button" onClick={refreshCaptcha}>
            Refresh
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter Captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
        />

        <button type="submit" className="btn">
          Request OTP
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  );
}

export default LoginForm;