function Report({ results }) {
    if (!results) return null;
    return (
        <>
            <div className="weatherresult">
                <h3>City:${results.name}<img src="${iconUrl}" alt="Weather Icon" /></h3>
                <p className="temp">  <strong>Temperature:</strong>${results.main.temp}°C</p>
                <p><strong>Weather:</strong> ${results.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${results.main.humidity}%</p>
                <p><strong>Wind:</strong> ${results.wind.speed} m/s</p>
            </div>
        </>
    )
}
export default Report