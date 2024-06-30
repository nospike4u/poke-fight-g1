import axios from "axios";
import { usestate, useEffect } from "react";
import { useParams } from "react-router-dom";

const Singlepokemon = () => {
  const [pokemondata, setpokemondata] = usestate([]);
  const { id } = useParams();

  const getpokemondata = async () => {
    const response = await axios.get(`http://localhost:8000/pokemon/${id}`);

    setpokemondata(response.json);
    console.log(response.json);
  };
  useEffect(() => {
    getpokemondata();
  }, []);

  return <div className="bg-sky-500/100 size-32">pokemondata</div>;
};

export default Singlepokemon;
