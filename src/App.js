import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Custom CSS
import LoginPage from "./artisan-portal/login-page"; // Import Login Page
import AdminLogin from "./admin-dashboard/admin-login"; // Import Admin Login Page
import CustomerWebHome from "./customer-web/customer-web-home"; // Import Customer Web Home

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Main Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <div className="background-image"></div>
              {/* Background image styled in App.css */}
              <div className="content-container">
                <div className="header-container">
                  <h1>
                    Discover Handcrafted Treasures from Artisans Around the
                    World
                  </h1>
                  <h2>Artisan Alley</h2>
                  <p>
                    Shop one-of-a-kind items made with passion and creativity.
                  </p>
                  <Link to="/customer-web-home">
                    {/* React Router Link to customer web home */}
                    <button className="explore-button">Explore the Market</button>
                  </Link>
                  <Link to="/admin-dashboard/login">
                    {/* React Router Link to admin dashboard */}
                    <button className="explore-button">Admin Dashboard</button>
                  </Link>
                  <Link to="/artisan-portal/login">
                    {/* React Router Link to artisan portal */}
                    <button className="explore-button">Artisan Portal</button>
                  </Link>
                </div>
              </div>
            </div>
          }
        />

        {/* Route for Login Page */}
        <Route path="/artisan-portal/login" element={<LoginPage />} />

        {/* Route for Admin Dashboard */}
        <Route path="/admin-dashboard/login" element={<AdminLogin />} />

        {/* Route for Customer Web Home */}
        <Route path="/customer-web-home" element={<CustomerWebHome />} />
      </Routes>
    </Router>
  );
}

export default App;
