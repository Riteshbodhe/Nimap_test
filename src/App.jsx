import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header";
import Home from "./Components/Home";
import TopRated from "./Components/TopRated";
import Upcoming from "./Components/Upcoming";
import Detail from "./Components/Detail";
import Search from "./Components/Search";

function App() {

  const [selectMovie , setSelected] = useState(null); 
  const [searchQuery, setSearchQuery] = useState("");

  

  return (
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
      <Route path="/" element={<Home   setMovie={setSelected}/>} />
        <Route path="/top-rated" element={<TopRated   setMovie={setSelected} />} />
        <Route path="/upcoming" element={<Upcoming setMovie={setSelected}/>} />
        <Route path="/movie/:id" element={<Detail getMovie={selectMovie}/>} />
        <Route path="/search/" element={<Search query={searchQuery} setMovie={setSelected}/>} />
        

      </Routes>
    </Router>
    
    
  )
}

export default App
