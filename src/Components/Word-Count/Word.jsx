import React, { useState } from "react";

function Word() {
  const [lcount, setLcount] = useState(0);
  const[wcount,setWcount] =useState(0);
  const[text,setText]=useState("");
  function handleChange(e){
    setText(e.target.value);
    setLcount(text.length);
    setWcount(text.split(/\s+/).length);
    
  }
  return (
    <div className="container">
      <h1 className="title">GeekforGeeks</h1>
      <h2 className="subtitle">Words and Letters Counter</h2>
      <textarea
        name="text"
        className="text"
        value={text}
        rows={20}
        cols={50}
        onChange={handleChange}
      ></textarea><br />
      <span>Word Count:{wcount}</span>
      <span>Letter Count:{lcount}</span>
    </div>
  );
}

export default Word;
