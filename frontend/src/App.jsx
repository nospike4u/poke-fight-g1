import { useState, UseEffect } from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AllPokemon from "./pages/AllPokemon";
import SinglePokemon from "./pages/SinglePokemon";
import PokemonInfo from "./pages/PokemonInfo";

function App() {
  const navigate = useNavigate();

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="pokemon" element={<AllPokemon/>}/>
            <Route path="pokemon/:id" element={<SinglePokemon/>}/>
            <Route path="pokemon/:id/:info" element={<PokemonInfo/>}/>
            <Route path="/*" element={<div>Error</div>}/>
        </Routes>
    </>
  );
}

export default App;
