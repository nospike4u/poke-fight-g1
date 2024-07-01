// src/App.js
import React, { useState } from 'react';
import axios from "axios";


const Player = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState('');

  const [userSelection, setUserSelection] = useState(null);

//Human User Selecting a Pokemon from a list
  const choosePokemon = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/pokemon/playerselect`);
      console.log(res.data);
      setImg(res.data);
    } catch (error) {
      console.log("Pokemon not found!");
    }
  };

  useEffect(()=> {
    choosePokemon();
  }, []);

  const playRockPaperScissors = () => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
      setResult('Tie');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('Player wins');
    } else {
      setResult('Computer wins');
    }
  };

  return (
    <div>
      HELLO!
      {/* <h1>Rock Paper Scissors Game</h1>
      <p>Choose your move:</p>
      {choices.map((choice) => (
        <button key={choice} onClick={() => setPlayerChoice(choice)}>
          {choice}
        </button>
      ))}
      <button onClick={playRockPaperScissors}>Play</button>
      <p>{result}</p> */}
    </div>
  );
};

export default Player;
