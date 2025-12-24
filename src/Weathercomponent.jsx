function Report({ results }) {
    if (!results || !results.name) return null;
    const icon = results.weather && results.weather[0] && results.weather[0].icon;
    const iconUrl = icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : null;
    return (
        <div className="weatherresult">
            <h3>
                City: {results.name}
                {iconUrl && <img className="icon" src={iconUrl} alt="Weather Icon" />}
            </h3>
            <p className="Temp">{results.main && results.main.temp}°C</p>
            <p><strong>Weather:</strong> {results.weather && results.weather[0] && results.weather[0].description}</p>
            <p><strong>Humidity:</strong> {results.main && results.main.humidity}%</p>
            <p><strong>Wind:</strong> {results.wind && results.wind.speed} m/s</p>
        </div>
    );
}

export default Report;