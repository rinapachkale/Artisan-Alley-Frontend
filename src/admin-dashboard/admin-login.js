import React from "react";
import "./admin-login.css"; // Custom CSS for admin login

function AdminLogin() {
  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
