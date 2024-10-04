import React, { useState } from "react";
import AddItem from "./AddItem";
import './styles.css'

export default function Todo() {
  const[newItem,setNewItem]=useState("");
  const [listItems,setListItems]= useState([]);

  function handleNewItem(e){
    setNewItem(e.target.value);
  }

  function handleClick(e){
    e.preventDefault();
     setListItems([...listItems, newItem]);
     setNewItem("");
  }

  function handleDelete(index){
    setListItems(listItems.filter((item,i)=> i !== index))
}
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <hr />
      <input
        type="text"
        placeholder="add item..."
        name="add-item"
        className="add-item "
        onChange={handleNewItem}
        value={newItem}
        required
      />
      <button className="add" onClick={handleClick} >ADD</button>
      <AddItem listItems={listItems} handleDelete={handleDelete} />
    </div>
  );
}
