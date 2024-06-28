import React, { useEffect, useState } from "react";
import axios from "axios";

const Allpokemon = () => {
  const [Allpokemon, setAllpokemon] = useState([]);

  const getpokemon = async () => {
    const response = await axios.get("http://localhost:8000/pokemon");

    setAllpokemon(response.data);
  };

  useEffect(() => {
    getpokemon();
  }, []);
  console.log(Allpokemon);

  return <div>{Allpokemon.map((e) => e.id)}</div>;
};

export default Allpokemon;
