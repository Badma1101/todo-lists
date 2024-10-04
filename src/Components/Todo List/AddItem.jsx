import React from "react";

export default function AddItem({listItems, handleDelete}) {

   
  return (
    <div className="list">
      <p className="task">
        <ul>
        {listItems.map((item,index) => (  
        <li key={index}>  
          {item}
          <button onClick={handleDelete} className="delete">Delete</button>  
          <button className="edit">Edit</button>  
          {item && <hr />}
        </li>
       ))}  

    </ul>
        </p>
      <hr />
    </div>
  );
}
