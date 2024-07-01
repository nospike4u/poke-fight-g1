import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import App from "../App";
import e from "cors";

const PokemonInfo = () => {
  const [pId, setId] = useState([]);
  const [pInfo, setInfo] = useState([]);

  const [error, setError] = useState(null);
  const [imgData, setImg] = useState([]);

  const { id } = useParams();
  const { info } = useParams();
  const navigate = useNavigate();

  const handleFetch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/pokemon/${id}/${info}`
      );
      console.log(res.data);
      setId(res.data);
      setInfo(res.data);
    } catch (error) {
      setError(error);
      console.error("Nothing found");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const fetchImg = async () => {
    try {
      const imgRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      console.log(imgRes.data);
      setImg(imgRes.data);
    } catch (error) {
      console.log("No image found");
    }
  };

  useEffect(() => {
    fetchImg();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen bg-blue-200 p-8">
        <div className="h-screen bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <div>
              <img
                src="http://img2.wikia.nocookie.net/__cb20140207202343/es.pokemon/images/4/43/Bulbasaur.png"
                alt="pokemon profile image"
                className="rounded-full bg-gray-300 min-h-52 w-52 mr-10"
              />
            </div>
            <div className="flex flex-col space-y-2">
              {pId ? (
                pId.map((pokemon) => (
                  <div>
                    <div className="flex bg-gray-300 h-auto rounded my-10">
                      <h2 key={pokemon.id} className="w-full">Pokemon ID:{pokemon.id}</h2>
                    </div>

                    <div className="pr-16 bg-gray-300 h-10 rounded my-10">
                      <p key={pokemon.type} className="w-auto">Type: {pokemon}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading Pokémon data...</p>
              )}
              {error && <p>Error fetching data: {error.message}</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-l">
            Previous
          </button>
          <button
            onClick={handleGoBack}
            className="text-white bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>

      <div>{imgData.name}</div>
    </>
  );
};

export default PokemonInfo;
