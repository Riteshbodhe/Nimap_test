import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Header = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      setSearchQuery(query); 
      navigate("/search");
      setQuery("");
      setMenuOpen(false); 
    }
  };

  return (
    <nav className="header">
      <Link to="/" className="logo">MovieDb</Link>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="tag">
          <Link to="/" onClick={() => setMenuOpen(false)}>Popular</Link>
          <Link to="/top-rated" onClick={() => setMenuOpen(false)}>Top Rated</Link>
          <Link to="/upcoming" onClick={() => setMenuOpen(false)}>Upcoming</Link>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Movie Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
