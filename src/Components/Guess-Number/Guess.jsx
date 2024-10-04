import React, {  useState } from 'react'

function Guess() {
    const randomNumber=Math.floor(Math.random()*20) +1;
    const[guess,setGuess]=useState("")
    const[message,setMessage]=useState("");

    function handleNumber(e){
        e.preventDefault();
        setGuess(e.target.value);
    }
function handleGuess(){
    if (guess < randomNumber) {
        setMessage('Too low!');
      } else if (guess > randomNumber) {
        setMessage('Too high!');
      } else {
        setMessage(`Congratulations! You guessed the number.`);
      }
}
function handleReset(){
    setMessage("");
    setGuess("");
}
 
  return (
    <div className='container'>
        <h1 className="title">Guess Number between 1 to 20</h1>
        <input type="text" className="number" value={guess}onChange={handleNumber}/>
        <button className="guess" onClick={handleGuess}>Guess</button>
        <button className="reset"  onClick={handleReset}>Reset</button>
       {message && <p className="para">You Guessed:{message} </p>} 
    </div>
  )
}

export default Guess