import React from "react";
import "./customer-web-home.css"; // Custom CSS for customer web home

function CustomerWebHome() {
  return (
    <div className="customer-web-home">
      <h2>Welcome to Artisan Alley</h2>
      <p>Your gateway to explore handcrafted treasures.</p>
      <div className="action-buttons">
        <button className="action-button">Login</button>
        <button className="action-button">Continue as Guest</button>
        <button className="action-button">Sign Up</button>
      </div>
    </div>
  );
}

export default CustomerWebHome;
