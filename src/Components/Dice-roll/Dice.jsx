import React, { useState } from 'react'
import dice1 from './assests/dice 1.png';
import dice2 from './assests/dice 2.png';
import dice3 from './assests/dice 3.png';
import dice4 from './assests/dice 4.png';
import dice5 from './assests/dice 5.png';
import dice6 from './assests/dice 6.png';
import './styles.css';
function Dice() {
    const [diceNumber,setDiceNumber]=useState(1);
    function rollDice(){
        const randomNumber=Math.floor(Math.random()*6)+1;
        setDiceNumber(randomNumber);
    }

    const diceImages={
        1:dice1,
        2:dice2,
        3:dice3,
        4:dice4,
        5:dice5,
        6:dice6
    };
  return (
    <div className='container'>
        <h1>Dice Rolling</h1>
        <img src={diceImages[diceNumber]} alt='dice1'/>
        <button onClick={rollDice}>Roll Dice</button>
    </div>
  )
}

export default Dice 