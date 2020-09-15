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
    };

    this.openMovieData = this.openMovieData.bind(this);
    this.getData = this.getData.bind(this);
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

  openMovieData() {
    this.setState({
      activeMovie: !this.state.activeMovie,
    });
  }

  render() {
    console.log(this.state.movieList);
    return this.state.movieList.map((movie, id) => (
      <Movie
        key={id}
        name={movie["im:name"].label}
        category={movie.category.attributes.label}
        description={movie.summary.label}
        activeMovie={this.state.activeMovie}
        openMovieData={this.openMovieData}
        listNumber={id}
      />
    ));
  }
}

const Movie = ({
  listNumber,
  name,
  category,
  description,
  activeMovie,
  openMovieData,
}) => {
  const number = listNumber + 1;
  console.log(description);
  return (
    <div className="movie-list__item">
      <Row>
        <Col className="movie-list__basic">
          <p>{name}</p>
          <p onClick={openMovieData}>czytaj więcej</p>
        </Col>
      </Row>
      {activeMovie ? (
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
