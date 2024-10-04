import React, { useState } from 'react'
import './styles.css';
function Card() {
    const[value,setValue]=useState("");
    const[err,setErr]=useState("")
    function handleChange(e){
        setValue(e.target.value);
        if(value.length<14){
            setErr("Enter valid CreditCard Number")
        }else if(value.length===14){
            setErr("Valid CreditCard Number");
        }else{
            setErr("wrong CreditCard number")
        }
    }
  return (
    <div className='container'>
        <center>
        <h1 className='title'>Validating CreditCard in ReactJS</h1>
        <form>
            <label htmlFor="credit" className="credit">Enter CreditCard:</label>
            <input type='text' className='input'value={value} onChange={handleChange}></input>
       <span>{err}</span>
        </form>
        </center>
    </div>
  )
}

export default Card