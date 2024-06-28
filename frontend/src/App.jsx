import "./index.css";

import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon";
import Pokemoninfo from "./pages/Pokemoninfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allpokemon />} />
          <Route path="/:id" element={<Singlepokemon />} />
          <Route path="/:id/:info" element={<Pokemoninfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
