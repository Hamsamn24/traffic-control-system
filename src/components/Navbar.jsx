import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css"; // Ensure this is correctly imported

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Traffic Monitor</h1>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/traffic-control">Traffic Control</Link>
        
      </div>
    </nav>
    
  );
};

export default Navbar;
