import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const Movie = ({
  movieName,
  movieCategory,
  movieDescription,
  movieBackgroundImage,
  isMovieDataWindowOpen,
  openMovieId,
  openMovieDataWindow,
  movieListNumber,
}) => {
  const movieNumberOnList = movieListNumber + 1;

  const movieImage = movieBackgroundImage.filter((image) =>
    Object.values(image.attributes).some(
      (val) => typeof val === "string" && val.includes("170")
    )
  );

  var backgroundImageUrl = movieImage[0].label;

  var movieStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7)), url(${backgroundImageUrl})`,
  };

  return (
    <Col md={3} sm={4} xs={12} className="movie-item">
      <Col md={12}>
        <Row>
          <Col>
            <p className="movie-item__title">{movieName}</p>
            <p className="movie-item__description">
              {movieDescription.length > 100
                ? movieDescription.slice(0, 100) + "..."
                : movieDescription}{" "}
            </p>
            <button
              onClick={() => {
                openMovieDataWindow(movieListNumber);
              }}
              className="movie-item__button"
            >
              read more <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Col>
        </Row>
      </Col>
      <p className="movie-item__number">{movieNumberOnList}</p>
      <Col
        md={12}
        className={
          isMovieDataWindowOpen && openMovieId === movieListNumber
            ? "movie-item__more-container movie-item__more-container--open"
            : "movie-item__more-container"
        }
        style={movieStyle}
      >
        <Row>
          <Col className="movie-item__row p-0">
            <p className="movie-item__category">{movieCategory}</p>
            <p className="movie-item__description">{movieDescription}</p>
            <button
              onClick={() => {
                openMovieDataWindow(movieListNumber);
              }}
              className="movie-item__button"
            >
              <FontAwesomeIcon icon={faChevronLeft} /> read less
            </button>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default Movie;
