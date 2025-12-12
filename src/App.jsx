import { useState } from "react"
import './App.css'
import Movie from "./Movie";


function App() {
  const [input, setInput] = useState("");
  const [Results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(false);

  async function getdata() {
    if (input === "") {
      setError("Please enter a movie name");
      return
    }

    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=aeeb4bde&t=${input}`);
      const data = await res.json();
      if (data.Response === "False") {
        setError("Movie not found");
        setResults(null);
      } else {
        setResults(data);
        setInput("");
      }
    }
    catch (err) {
      setError("Something went wrong");
    }
    finally {
      setLoading(false);
    }

  }

  return (
    <>
      <div className="container">
        <div className="inputfield">
          <h3>Movie Finder</h3>
          <input
            value={input}
            onChange={e => {
              setInput(e.target.value);
            }}
            placeholder="Enter Movie Name"
            type="text"
          />
          <button onClick={getdata} >
            {load ? "Searching..." : "Find Movie"}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="resultcontainer">
          <Movie result={Results} />

        </div>
      </div>
    </>
  )
}

export default App