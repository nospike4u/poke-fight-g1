import "./index.css";

import { useEffect, useState } from "react";
import axios from "axios";
import Allpokemon from "./pages/Allpokemon";
import Singlepokemon from "./pages/Singlepokemon";
import Pokemoninfo from "./pages/Pokemoninfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [getAllpokemon, setgetAllpokemon] = useState("");

  const getpokemon = async () => {
    const response = await axios.get("http://localhost:8000/pokemon");

    setgetAllpokemon(response.data);
  };

  useEffect(() => {
    getpokemon();
  }, []);
  console.log(getAllpokemon);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Allpokemon getAllpokemon={getAllpokemon} />}
          />
          <Route path="/:id" element={<Singlepokemon />} />
          <Route path="/:id/:info" element={<Pokemoninfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
