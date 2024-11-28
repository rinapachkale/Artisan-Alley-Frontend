import React from "react";
import "./login-page.css"; // Optional CSS for login page

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Welcome to the Artisan Portal</h1>
      <form className="login-form">
        {/* Login Form */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
