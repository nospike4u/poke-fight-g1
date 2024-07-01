import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Singlepokemon = () => {
  const [pokemonId, setpokemonId] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getpokemondata = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/pokemon/${id}`);
      console.log(response.data);
      setpokemonId(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  // console.log(pokemonId);
  const pokemonbase = pokemonId.base;

  console.log(pokemonbase);
  console.log(pokemonId.name);

  useEffect(() => {
    getpokemondata();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-sky-500/100 p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Single Pokemon Data</h1>
          <p>
            <strong>ID:</strong> {pokemonId.id}
          </p>
          {/*  <p>
            <strong>Name :</strong>
            {Object.entries(pokemonId.name).map((item, index) => (
              <li index={index}>{item}</li>
            ))}
          </p>
          <p>
            <strong>BASE :</strong>
            {Object.entries(pokemonbase).map((item) => (
              <li>
                {item[0]} : {item[1]}
              </li>
            ))}
          </p>
          <p>
            <strong>Type:</strong> {pokemonId.type[0]} , {pokemonId.type[1]}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Singlepokemon;
