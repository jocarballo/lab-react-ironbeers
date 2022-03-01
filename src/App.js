import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./Home";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";
import SingleBeer from "./SingleBeer";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/beers/:beerId' element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
