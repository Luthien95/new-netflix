import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Container className="movie-list">
        <h1 className="movie-list__header">Top 100 movies</h1>
        <p className="movie-list__description">
          Application showing the list of top 100 movies based on the iTunes
          json file.
        </p>
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
