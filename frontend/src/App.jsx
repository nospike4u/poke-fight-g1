import "./index.css";
import Home from "./pages/Home";
import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon";
import Pokemoninfo from "./pages/Pokemoninfo";
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
