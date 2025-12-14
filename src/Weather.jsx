import React from 'react'
import { useState } from 'react'
import Report from './Weathercomponent';
function Weather() {
    const [input, setInput] = useState("");
    const [Results, setResults] = useState([]);
    const [error, setError] = useState(null);
    // const [Load, SetLoading] = useState(false);

    async function WeatherReport() {
        if (!input) {
            setError("Please Enter City");
            return;
        }
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6dae0c680675edcbd02e5e03d95b8a81&units=metric`);
            const data = await res.json();
            if (data.Response === "False") {
                setError("Weather Not Found");
                setResults(null);
            } else {
                setResults(data);
                setInput("");
                setError(null)
            }
        } catch (error) {
            setError("Not Found");
        }
    }
    return (
        <>
            <div className="container">
                <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='Enter City Name' />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button onClick={WeatherReport}>Check Weather</button>
                <Report results={Results} />
            </div>
        </>
    )
}

export default Weather
