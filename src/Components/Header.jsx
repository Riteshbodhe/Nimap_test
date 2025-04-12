import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'


const Header = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      setSearchQuery(query); 
      navigate("/search");
      setQuery("");
    }
  };

  return (
    <nav className="header">
      <Link to={"/"} className="logo" href="/">MovieDb</Link>
      <div className="tag">
        <a href="/">Popular</a>
        <a href="/top-rated">Top Rated</a>
        <a href="/upcoming">Upcoming</a>
      </div>
      <div className="search">
        <input
          type="text" placeholder="Movie Name" value={query} onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Header;
