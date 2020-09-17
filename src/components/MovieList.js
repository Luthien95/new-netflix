import React from "react";
import axios from "axios";
import Movie from "./Movie";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./../style/css/style.css";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      isMovieDataWindowOpen: false,
      openMovieId: null,
      searchTerm: "",
      showItems: 9,
    };

    this.openMovieDataWindow = this.openMovieDataWindow.bind(this);
    this.getMovieList = this.getMovieList.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.showMoreMovieItems = this.showMoreMovieItems.bind(this);
  }

  componentWillMount() {
    this.getMovieList();
  }

  getMovieList() {
    axios
      .get("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then((response) => {
        console.log(response);
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

  showMoreMovieItems() {
    console.log("clicked");
    this.setState({
      showItems:
        this.state.showItems >= this.state.movieList.length
          ? this.state.showItems
          : this.state.showItems + 9,
    });
    console.log(this.state.showItems >= this.state.searchTerm.length);
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
          className="movie-list__search-input"
        />

        <Row className="mx-0">
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
                    backgroundImage={movie["im:image"]}
                    isMovieDataWindowOpen={this.state.isMovieDataWindowOpen}
                    openMovieId={this.state.openMovieId}
                    openMovieDataWindow={this.openMovieDataWindow}
                    listNumber={id}
                  />
                ))
            : this.state.movieList
                .slice(0, this.state.showItems)
                .map((movie, id) => (
                  <Movie
                    key={id}
                    name={movie["im:name"].label}
                    category={movie.category.attributes.label}
                    description={movie.summary.label}
                    backgroundImage={movie["im:image"]}
                    isMovieDataWindowOpen={this.state.isMovieDataWindowOpen}
                    openMovieId={this.state.openMovieId}
                    openMovieDataWindow={this.openMovieDataWindow}
                    listNumber={id}
                  />
                ))}
        </Row>
        <button onClick={this.showMoreMovieItems}>Show more...</button>
      </React.Fragment>
    );
  }
}

export default MovieList;
