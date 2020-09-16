import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../style/css/style.css";

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      activeMovie: false,
      activeMovieId: null,
      searchTerm: "",
    };

    this.openMovieData = this.openMovieData.bind(this);
    this.getData = this.getData.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    axios
      .get("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then((res) => {
        this.setState({
          movieList: res.data.feed.entry,
        });
      })
      .catch((error) => console.log("Error" + error));
  }

  openMovieData(id) {
    this.setState({
      activeMovie: !this.state.activeMovie,
      activeMovieId: id,
    });
  }

  setSearchTerm(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    const state = this.state.searchTerm;
    if (state) var searchTerm = state.toLowerCase();

    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchTerm}
          onChange={this.setSearchTerm}
        />

        {this.state.searchTerm
          ? this.state.movieList
              .filter(function (movie, index) {
                const label = movie["im:name"].label;
                const labelInLowerCase = label.toLowerCase();

                return labelInLowerCase.includes(searchTerm);
              })
              .map((movie, id) => (
                <Movie
                  key={id}
                  name={movie["im:name"].label}
                  category={movie.category.attributes.label}
                  description={movie.summary.label}
                  activeMovie={this.state.activeMovie}
                  activeMovieId={this.state.activeMovieId}
                  openMovieData={this.openMovieData}
                  listNumber={id}
                />
              ))
          : this.state.movieList.map((movie, id) => (
              <Movie
                key={id}
                name={movie["im:name"].label}
                category={movie.category.attributes.label}
                description={movie.summary.label}
                activeMovie={this.state.activeMovie}
                activeMovieId={this.state.activeMovieId}
                openMovieData={this.openMovieData}
                listNumber={id}
              />
            ))}
      </React.Fragment>
    );
  }
}

const Movie = ({
  listNumber,
  name,
  category,
  description,
  activeMovie,
  activeMovieId,
  openMovieData,
}) => {
  const number = listNumber + 1;

  return (
    <div className="movie-list__item">
      <Row>
        <Col className="movie-list__basic">
          <p>{name}</p>
          <p
            onClick={() => {
              openMovieData(listNumber);
            }}
          >
            czytaj więcej
          </p>
        </Col>
      </Row>
      {activeMovie && activeMovieId === listNumber ? (
        <Row>
          <Col>
            <p>{category}</p>
          </Col>
          <Col>{description}</Col>
        </Row>
      ) : null}
      <p>{number}</p>
    </div>
  );
};

export default TaskList;
