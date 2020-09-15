import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Container className="movie-list">
        <h1>Top 100 movies</h1>
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
