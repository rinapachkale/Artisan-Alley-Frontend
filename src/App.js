import React from "react";
import "./App.css"; // Custom CSS

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>{" "}
      {/* Background image in App.css */}
      <div className="content-container">
        <div className="header-container">
          <h1>Discover Handcrafted Treasures from Artisans Around the World</h1>
          <h2>Artisan Alley</h2>
          <p>Shop one-of-a-kind items made with passion and creativity.</p>
          <button className="explore-button">Explore the Market</button>
          <button className="explore-button">Admin Dashboard</button>
          <button className="explore-button">Artisan Portal</button>
        </div>
      </div>
    </div>
  );
}

export default App;
