import allMovies from "./data";
import { useState, useEffect } from "react";
function App() {
  const [searchingText, setSearchingText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    const moviesAfterFilter = allMovies.filter((oneMovie) => {
      const returnedMovie = oneMovie.title.toLowerCase();
      return returnedMovie.includes(searchingText.toLowerCase());
    });
    setFilteredMovies(moviesAfterFilter);
  }, [searchingText]);
  return (
    <div className="movies-box">
      <form>
        <input
          type="input"
          placeholder="Zadaj text"
          onChange={(e) => setSearchingText(e.target.value)}
        />
      </form>
      <div className="all-movies">
        {filteredMovies.map((oneMovie) => {
          const { id, title, image, age, tags, description } = oneMovie;
          return (
            <div key={id} className="one-movie">
              <img src={image} alt={description} />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
