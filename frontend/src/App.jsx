import "./index.css";
import Home from "./pages/Home";
import Allpokemon from "./pages/AllPokemon";

import Singlepokemon from "./pages/SinglePokemon";
import Pokemoninfo from "./pages/PokemonInfo";

import { Routes, Route } from "react-router-dom";

function App() {
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
