import React, { useState } from 'react'

export default function Basic() {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[contact,setContact]=useState("")

  return (
    <div className='container'>
        <h1 className='title'>Basic Details</h1>
        <label htmlFor='name'>1.First Name</label>
        <input type="text" className='fname' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <label htmlFor='name'>2.Last Name</label>
        <input type="text" className='lname' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <label htmlFor='email'>3.Email</label>
        <input type="email" className='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor='contact'>4. Contact No.</label>
        <input type="number" className='contact' value={contact} onChange={(e)=>setContact(e.target.value)}/>
        <button className='next'>Next</button>
        <div className='btn-num'>
            <button className='one'>1</button>
            <button className='two'>2</button>
            <button className='three'>3</button>
        </div>
    </div>
  )
}
