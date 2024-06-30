import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Singlepokemon = () => {
  const [pokemonId, setpokemonId] = useState([]);
  const { id } = useParams();
  //console.log(id);
  const getpokemondata = async () => {
    const response = await axios.get(`http://localhost:8000/pokemon/${id}`);

    setpokemonId(response.data);
    console.log(response.data);
  };

  /*  const pokemonbase = pokemonId.base;

  console.log(pokemonbase); */

  useEffect(() => {
    getpokemondata();
  }, []);

  return (
    <ul className="bg-sky-500/100 size-64">
      <li>
        <strong>Single Pokemon Data </strong>
      </li>
      <li>ID: {pokemonId.id}</li>
      <li>
        Base :
        {/* {Object.entries(pokemonbase).map((item, index) => (
          <li index={index}>{item}</li>
        ))} */}
      </li>
      <li>
        Type: {pokemonId.type[0]} , {pokemonId.type[1]}
      </li>
    </ul>
  );
};

export default Singlepokemon;
