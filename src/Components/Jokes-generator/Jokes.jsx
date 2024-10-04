import React, { useEffect, useState } from "react";
import "./styles.css";

function Jokes() {
    const[generate,setGenerate]=useState('');
    const[loading,setLoading]=useState(false);
    
    const fetchData=async() => {
        setLoading(true);
        try{
            const response=await fetch("https://official-joke-api.appspot.com/random_joke");
            const data=await response.json();
            setGenerate(`${data.setup} - ${data.punchline}`);

        }catch(error){
            setGenerate("Oops! there is a error.. Please check")
        }
        setLoading(false);
    }

    useEffect(()=> {
        fetchData();
    },[]);
  
  return (
    <div className="container">
        <center>
      <h1 className="title">Joke Generator Using React and Joke API</h1>
      {loading ? "Loading..." : generate}
      <button onClick={fetchData} className="btn">Click to generate a joke</button>
      </center>
    </div>
  );
}

export default Jokes;
