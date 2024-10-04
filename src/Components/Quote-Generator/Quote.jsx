// import React, { useEffect, useState } from 'react'
// import './styles.css';

// function Quote() {

//     const[quotes,setQuotes]=useState([]);
//     const[curIndex,setCurIndex]=useState("");
//     const [author, setAuthor] = useState('');

//     function handlePrev(){
//         setCurIndex((curIndex-1 + quotes.length)%quotes.length)
//     }

//     function handleNext(){
//         setCurIndex((curIndex+1 + quotes.length)%quotes.length)
//     }
    
//     useEffect(() => {
//         async function fetchData(){
//             const response=await fetch("https://dummyjson.com/quotes");
//             const data=await response.json();
//             console.log(data);
//             if (data && data.quotes) {  
//                 setQuotes(data.quotes);  
//                 setCurIndex(Math.floor(Math.random() * data.quotes.length));
//                 setAuthor(data.quotes[curIndex].author);  
//               }  
//         };
//         fetchData();
//     },[curIndex]);
    
    
//   return (
    
//     <div className='container'>
//         <center>
//         <h1 className='title'>GeeksforGeeks</h1>
//         <h2 className='subtitle'>Inspirational Quote Generator</h2>
//         {quotes.length > 0 && (  
//        <div className='quote-bg'>  
//         <p className="quote">{quotes[curIndex].quote}</p>  
//         <p className="author">{author}</p> 
//        </div>  
//       )}  
//         <div className="btn">
//             <button className="prev" onClick={handlePrev}>Previous</button>
//             <button className="next" onClick={handleNext}>Next</button>
//             <button className="fb">Share on Facebook</button>
//         </div>
//         </center>
//     </div>
//   )
// }

// export default Quote