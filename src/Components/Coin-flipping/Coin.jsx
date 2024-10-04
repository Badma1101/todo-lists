import React, { useState } from 'react'
import './styles.css';
function Coin() {
    const[result,setResult]=useState("Head");
    const[counth,setCounth]=useState(0);
    const[countt,setCountt]=useState(0);
    const[total,setTotal]=useState(0);
    function flipCoin(){
        const toss=["Head", "Tail"];
        const  random=toss[Math.floor(Math.random()*toss.length)];
        setResult(random);
        if(random==="Head"){
            setCounth(counth+1);
        }else{
            setCountt(countt+1);
        }
        setTotal(total+1);
    }

    function reset(){
        setResult("Head");
        setCounth(0);
        setCountt(0);
        setTotal(0);
    }
  return (
    <div className='container'>
        <center>
        <h1 className='title'>Lets flip a coin</h1>
        <div className='coins'>
        <span className='coin'>{result}</span>
        </div>
        <p>Head: {counth} <br />
             Tail:{countt}<br /> out of {total}
             </p>
        <button className='btn' onClick={flipCoin}>Flip</button>
        <button className='reset' onClick={reset}>Reset</button>
        </center>
    </div>
  )
}

export default Coin