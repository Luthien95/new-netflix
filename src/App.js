import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Container className="movie-list">
        <h1>Top 100 movies</h1>
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
