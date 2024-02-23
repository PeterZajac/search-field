import allMovies from "./data";
import { useState, useEffect } from "react";
function App() {
  const [searchingText, setSearchingText] = useState("");
  useEffect(() => {
    console.log("jebau som ti mať");
  }, [searchingText]);
  return (
    <div className="App">
      <form>
        <input
          type="input"
          placeholder="Zadaj text"
          onChange={(e) => setSearchingText(e.target.value)}
        />
      </form>
      <div>
        {allMovies.map((oneMovie) => {
          const { id, title, image, age, tags, description } = oneMovie;
          return (
            <div key={id}>
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
