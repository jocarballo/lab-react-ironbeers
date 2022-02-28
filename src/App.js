import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./Home";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
