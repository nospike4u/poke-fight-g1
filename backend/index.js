
//always import express
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//create connection between data from pokemon file
import pokemonList from '../database/index.js';


// this is the express object/library that will be used throughout
const app = express();
dotenv.config();
app.use(cors({origin:"*"}))

//This line allows us to execute POST and PUT requests
app.use(express.json());

//this is the port to connect the server
const port = 8001;


// -----------------------------------------------GET REQUEST-----------------------------------------------

//Note for Dominic: HandleClick function needed. I think it needs to be done in frontend.

app.get('/', (req, res) => {
    res.send(`<button onClick={handleClick} style={{cursor: "pointer"}} className="text-white bg-cyan-400 w-2/3 h-10 hover:bg-slate-950" >
        Start Game!
        </button>
        <p>Click here to play!</p>
`
      )
  })

//this is the GET verb for RESTful APIs. We will use this to get the data. Just remember it takes a url as a string and a callback function with 2 arguments. This is called a "ROUTE". i.e. '/'.
//Create a GET route on /pokemon which gives the complete list of pokemon from the JSON
app.get('/:pokemon', (req, res) => {
    const { pokemon } = req.params;
//We are now using the "allPokemon" variable to fetch and store data from the pokemonList array in the "index.js" file (in the database folder). Remember the "[]" is used to dynamically access properties in objects.
    const allPokemon = pokemonList;
    
    if(!allPokemon || allPokemon === 0) {
        res.json({message:`No pokemon found.`})
        
    } else {
        res.send(`
        <h1>${pokemon.toUpperCase()}</h1>
        <ul>
        ${allPokemon?.map((eachPokemon, index) =>
       `<li>I choose you <a href="/${pokemon}/${index}">${eachPokemon.name.english}!</a>.</li>
        <p>${eachPokemon.name.english} is a ${eachPokemon.type} pokemon!</p>
        <hr>
        <br>`
        ).join("")
    }
    </ul>`
    
    )
}
});


  //This gives only one pokemon from the JSON thanks to its id
  app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params;
 
  const singlePokemon = pokemonList;
  
  singlePokemon?.filter((eachPokemon) => 
    eachPokemon.id === +id

)
if (singlePokemon.length === 0) {
    return res.json({message:`No pokemon found with ID ${id}.`});    
  } else {

      return res.json(`${singlePokemon.eachPokemon} is a pokemon with an id of ${id}.`);
  }

    
});

   //This gives only one pokemon from the JSON thanks to its id
   app.get('/pokemon/:id/:info', (req, res) => {
    const parameters = req.params;

    const pokemonID = parameters.id;
    const pokemonInfo = parameters.info;
 
  const singlePokemon = pokemonList.find((eachPokemon) => eachPokemon.id == pokemonID);
  const result = singlePokemon[pokemonInfo];
  
  let index = singlePokemon.findIndex(item => item.id === pokemonID);
  if(index === -1) {
    console.log(index);

      return res.json({message:`No pokemon found with that information`});
  } else {
        console.log(result);
        return res.json(result);
  }
  });

// -----------------------------------------------POST REQUEST-----------------------------------------------







// -----------------------------------------------UPDATE REQUEST-----------------------------------------------







// -----------------------------------------------DELETE REQUEST-----------------------------------------------








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})