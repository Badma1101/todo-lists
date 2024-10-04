import React, { useEffect, useState } from 'react'

function LoadMoreButton() {

    const[loading,setLoading]=useState(false);
    const[products,setProducts]=useState([]);
    const[count,setCount]=useState(0);

    async function fetchProduct(){
        try{
            const response=await fetch('')
        }catch(e){
            console.log(e);
            
        }
    }
    useEffect(()=>{

    })
  return (
    <div className='container'>
        LoadMoreButton</div>
  )
}

export default LoadMoreButton