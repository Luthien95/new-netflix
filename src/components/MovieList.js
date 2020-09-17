import React from "react";
import axios from "axios";
import Movie from "./Movie";
import Row from "react-bootstrap/Row";
import "./../style/css/style.css";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      isMovieDataWindowOpen: false,
      openMovieId: null,
      searchTerm: "",
      showItems: 8,
      movieNumberInList: 1,
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
        this.setState({
          movieList: response.data.feed.entry,
        });
      })
      .then((response) => {
        this.state.movieList.map((movie) => {
          console.log(movie);
          this.setState({
            movie: {
              ...this.state.movie,
              bb: 1,
            },
            movieNumberInList: this.state.movieNumberInList + 1,
          });
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
    this.setState({
      showItems:
        this.state.showItems >= this.state.movieList.length
          ? this.state.showItems
          : this.state.showItems + 8,
    });
  }

  render() {
    const searchTerm = this.state.searchTerm;
    if (searchTerm) var searchTermLowerCase = searchTerm.toLowerCase();

    console.log(this.state.movieList);
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
                    movieName={movie["im:name"].label}
                    movieCategory={movie.category.attributes.label}
                    movieDescription={movie.summary.label}
                    movieBackgroundImage={movie["im:image"]}
                    isMovieDataWindowOpen={this.state.isMovieDataWindowOpen}
                    openMovieId={this.state.openMovieId}
                    openMovieDataWindow={this.openMovieDataWindow}
                    movieListNumber={id}
                  />
                ))
            : this.state.movieList
                .slice(0, this.state.showItems)
                .map((movie, id) => (
                  <Movie
                    key={id}
                    movieName={movie["im:name"].label}
                    movieCategory={movie.category.attributes.label}
                    movieDescription={movie.summary.label}
                    movieBackgroundImage={movie["im:image"]}
                    isMovieDataWindowOpen={this.state.isMovieDataWindowOpen}
                    openMovieId={this.state.openMovieId}
                    openMovieDataWindow={this.openMovieDataWindow}
                    movieListNumber={id}
                  />
                ))}
        </Row>
        <button
          onClick={this.showMoreMovieItems}
          className="movie-list__button"
        >
          Show more...
        </button>
      </React.Fragment>
    );
  }
}

export default MovieList;
