import React, { useState } from 'react'
import './style.css';
function Dices() {
    const[diceNumber1,setDiceNumbber1]=useState(1);
    const[diceNumber2,setDiceNumbber2]=useState(6);
    function rollDice(){
        const randomNumber1=Math.floor(Math.random()*6)+1;
        setDiceNumbber1(randomNumber1);
        const randomNumber2=Math.floor(Math.random()*6)+1;
        setDiceNumbber2(randomNumber2);
        
    }
  return (
    <div className='container'>
        <h1 className='title'>Dice rolling</h1>
        <div className='dice'>
            <h1 className='dicenum'>{diceNumber1}</h1>
        </div>
        <div className='dice'>
            <h1 className='dicenum'>{diceNumber2}</h1>
        </div>
        <button onClick={rollDice} className='btn'>Roll Dice</button>
    </div>
  )
}

export default Dices