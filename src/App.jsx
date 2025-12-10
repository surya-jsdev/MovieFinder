import { useState } from "react"
import './App.css'
import Movie from "./Movie";
function App() {
  const [input, setInput] = useState("");
  const [Results, setResults] = useState(null);
  const [Error, setError] = useState(null);

  async function getdata() {
    if (!input) {
      setError("Please Enter Movie Name");
      return
    }

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=aeeb4bde&t=${input}`);
      const data = await res.json();
      if (data.Response === "false") {
        setError("Movie not found");
        setResults(null);
      } else {
        setResults(data);
        setInput("");
      }
    }
    catch (error) {
      setError("Something Went Wrong");
    }
  }
  return (
    <>
      <div className="container">
        <div className="inputfield">
          <h3>Movie Finder</h3>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter Movie Name" type="text" />
          <button onClick={getdata}>Find Movie</button>
          {Error && <p style={{ color: 'red' }}>{Error}</p>}
        </div>
        <div className="resultcontainer">
          <Movie result={Results} />
        </div>
      </div>
    </>
  )
}

export default App