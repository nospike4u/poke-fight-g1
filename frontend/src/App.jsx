import { useState, UseEffect } from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon";
import Pokemoninfo from "./pages/Pokemoninfo";

function App() {
  const navigate = useNavigate();

  return (
    <>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Allpokemon />} />
          <Route path="/pokemon/:id" element={<Singlepokemon />} />
          <Route path="/pokemon/:id/:info" element={<Pokemoninfo />} />
          <Route path="/*" element={<div>Error</div>} />

        </Routes>
    </>
  );
}

export default App;
