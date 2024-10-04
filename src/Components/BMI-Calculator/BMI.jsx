import React, { useEffect, useState } from 'react'

export default function BMI() {
    const[weight,setWeight]=useState("");
    const[height,setHeight]=useState("");
    const[bmi,setBmi]=useState(null);
    const[status,setStatus]=useState("")

    function handleWeight(e){
        setWeight(e.target.value)
    }

    function handleHeight(e){
        setHeight(e.target.value)
    }

    function handleCalculate(){
        if(height!=="" && weight!==""){
            const calcHeight=(height/100);
            const calcBmi=(weight/(calcHeight*calcHeight));
            setBmi(calcBmi);
        }else{
            alert("Please enter values!")
        }
    }
        useEffect(()=>{
            let Bmistatus="";
            if(bmi<18.5){
                Bmistatus="UnderWeight";
            }else if(bmi>=18.5 && bmi<=24.9){
                Bmistatus="Normal Weight";
                
            }else if(bmi>=25 & bmi<=29.9){
                Bmistatus="Over Weight";
            }else {
                Bmistatus="Obese";
            }
            setStatus(Bmistatus);
            
        },[bmi])
    
  return (
    <div className='container'>
        <h1>BMI Calculator</h1>
        <p>Weight(kg):</p>
        <input type='number' className='weight' value={weight} onChange={handleWeight}/>
        <p>Height(cm):</p>
        <input type='number' className='height' value={height} onChange={handleHeight}/>
        <button className='calculate' onClick={handleCalculate}>Calculate</button>
        <h3>Your BMI:{bmi} </h3>
        <h4>Status:{status}</h4>
    </div>
  )
}
