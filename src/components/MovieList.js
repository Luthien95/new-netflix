import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../style/css/style.css";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      isMovieDataWindowOpen: false,
      openMovieId: null,
      searchTerm: "",
    };

    this.openMovieDataWindow = this.openMovieDataWindow.bind(this);
    this.getMovieList = this.getMovieList.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  componentWillMount() {
    this.getMovieList();
  }

  getMovieList() {
    axios
      .get("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then((response) => {
        this.setState({
          movieList: response.data.feed.entry,
        });
      })
      .catch((error) => console.log("Error" + error));
  }

  openMovieDataWindow(openMovieId) {
    this.setState({
      isMovieDataWindowOpen: !this.state.isMovieDataWindowOpen,
      openMovieId: openMovieId,
    });
  }

  setSearchTerm(event) {
    const newSearchTerm = event.target.value;

    this.setState({
      searchTerm: newSearchTerm,
    });
  }

  render() {
    const searchTerm = this.state.searchTerm;
    if (searchTerm) var searchTermLowerCase = searchTerm.toLowerCase();

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
                const movieLabel = movie["im:name"].label;
                const movieLabelLowerCase = movieLabel.toLowerCase();

                return movieLabelLowerCase.includes(searchTermLowerCase);
              })
              .map((movie, id) => (
                <Movie
                  key={id}
                  name={movie["im:name"].label}
                  category={movie.category.attributes.label}
                  description={movie.summary.label}
                  isMovieDataWindowOpen={this.state.isMovieDataWindowOpen}
                  openMovieId={this.state.openMovieId}
                  openMovieDataWindow={this.openMovieDataWindow}
                  listNumber={id}
                />
              ))
          : this.state.movieList.map((movie, id) => (
              <Movie
                key={id}
                name={movie["im:name"].label}
                category={movie.category.attributes.label}
                description={movie.summary.label}
                isMovieDataWindowOpen={this.state.isMovieDataWindowOpen}
                openMovieId={this.state.openMovieId}
                openMovieDataWindow={this.openMovieDataWindow}
                listNumber={id}
              />
            ))}
      </React.Fragment>
    );
  }
}

const Movie = ({
  name,
  category,
  description,
  isMovieDataWindowOpen,
  openMovieId,
  openMovieDataWindow,
  listNumber,
}) => {
  const movieNumberOnList = listNumber + 1;

  return (
    <div className="movie-list__item">
      <Row>
        <Col className="movie-list__basic">
          <p>{name}</p>
          <p
            onClick={() => {
              openMovieDataWindow(listNumber);
            }}
          >
            czytaj więcej
          </p>
        </Col>
      </Row>
      {isMovieDataWindowOpen && openMovieId === listNumber ? (
        <Row>
          <Col>
            <p>{category}</p>
          </Col>
          <Col>{description}</Col>
        </Row>
      ) : null}
      <p>{movieNumberOnList}</p>
    </div>
  );
};

export default MovieList;
