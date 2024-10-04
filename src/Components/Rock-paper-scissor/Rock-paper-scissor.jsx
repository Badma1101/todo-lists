import React, { useState } from 'react'

function RockPaperScissor() {
  const choices = ["Rock", "Paper", "Scissor"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");

  function handlePlayerChoice(choice){
    setPlayerChoice(choice);
    const randomChoice=choices[Math.floor(Math.random()*choices.length)]
    setComputerChoice(randomChoice);
    calculateScore(choice,randomChoice)
  }

  function calculateScore(player,computer){
    if(player===computer){
setResult("Its a draw");
    }
    else if((player === "Rock" && computer === "Scissor") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock"))
    {
      setPlayerScore(playerScore+1);
      setResult("Player wins");
    }else{
      setComputerScore(computerScore+1);
      setResult("Computer wins");
    } 
    }
  function hanldeReset(){
    setResult("");
    setComputerScore(0);
    setComputerChoice("");
    setPlayerChoice("");
    setPlayerScore(0);
  }
  return (
    <div className='container'>
        <h1 className='title'>Welcome to Rock Paper Scissor Game</h1>
        <div className="btn">
            <button className="rock" onClick={()=>handlePlayerChoice("Rock")}>Rock</button>
            <button className="paper"onClick={()=>handlePlayerChoice("Paper")}>Paper</button>
            <button className="scissor" onClick={()=>handlePlayerChoice("Scissor")}>Scissor</button>
        </div>
        <p>Your choice is {playerChoice}</p>
        <p>Computer Choice is {computerChoice} </p>
        <h3>Player: {playerScore}</h3>
        <h3>Computer:{computerScore} </h3>
        <h3>{result}</h3>
        <button onClick={hanldeReset}>Reset</button>
    </div>
  )
}

export default RockPaperScissor