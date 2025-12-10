

function Movie({ result }) {
    if (!result) return null;
    return (
        <div className='moviecontainer'>
            <div className="movie-card">
                <img src={result.Poster} alt="Poster" />
                <h4><strong>Movie Name:</strong> {result.Title}</h4>
                <p><strong>Actors:</strong> {result.Actors}</p>
                <p><strong>Director:</strong> {result.Director}</p>
                <p><strong>Year:</strong> {result.Year}</p>
                <p><strong>IMDB:</strong> {result.imdbRating}/10</p>
            </div>
        </div>
    );
}
export default Movie;
