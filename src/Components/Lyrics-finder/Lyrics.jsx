import React, { useState } from "react";

function Lyrics() {
    const[artist,setArtist]=useState("");
    const[song,setSong]=useState("");
    const[error,setError]=useState("");
    const[lyrics,setLyrics]=useState("");
    function handleArtist(e){
        setArtist(e.target.value);
    }
    function handleSong(e){
        setSong(e.target.value);
    }

   async function getLyrics(){
    setError("");
    setLyrics("");
    try{
        const response=await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        if(!response.ok){
            throw new Error("Lyrics not found");
        }
        const data=await response.json();
        setLyrics(data.lyrics);

    }catch(err){
        setError("Lyrics not founds");
    }
    }
    function handleSubmit(e){
        e.preventDefault();
        if(artist && song){
            getLyrics();
        }else{
            setError("Please provide both artist and title");
        }
    }

   
  return (
    <div className="container">
      <h1 className="title">Lyrics Finder</h1>
      <form>
        <input type="text" placeholder="Artist" value={artist} onChange={handleArtist} className="artist" required />
        <input
          type="text"
          placeholder="Song Title"
          className="song-title"
          value={song}
          onChange={handleSong}
          required
        />
        <button type="submit" className="submit" onClick={handleSubmit}>
          Get Lyrics
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {lyrics && (
        <div>
          <h3>Lyrics:</h3>
          <pre>{lyrics}</pre>
        </div>
      )}
    </div>
  );
}

export default Lyrics;
