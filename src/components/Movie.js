import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Movie = ({
  name,
  category,
  description,
  backgroundImage,
  isMovieDataWindowOpen,
  openMovieId,
  openMovieDataWindow,
  listNumber,
}) => {
  const movieNumberOnList = listNumber + 1;

  const movieImage = backgroundImage.filter((image) =>
    Object.values(image.attributes).some(
      (val) => typeof val === "string" && val.includes("170")
    )
  );

  var backgroundImageUrl = movieImage[0].label;

  var movieStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7)), url(${backgroundImageUrl})`,
  };

  return (
    <Col md={3} sm={4} xs={12} className="movie-list__item">
      <Col md="12">
        <Row>
          <Col className="movie-list__basic">
            <p className="movie-list__title">{name}</p>
            <p className="movie-list__description">
              {description.length > 70
                ? description.slice(0, 70) + "..."
                : description}{" "}
            </p>
            <p
              onClick={() => {
                openMovieDataWindow(listNumber);
              }}
              className="movie-list__more-button"
            >
              czytaj więcej
            </p>
          </Col>
        </Row>
      </Col>
      <p className="movie-list__number">{movieNumberOnList}</p>
      <Col
        md="12"
        className={
          isMovieDataWindowOpen && openMovieId === listNumber
            ? "movie-list__more movie-list__more--open"
            : "movie-list__more"
        }
        style={movieStyle}
      >
        <Row className="movie-list__more-row p-3">
          <Col>
            <p className="movie-list__more-category">{category}</p>
            <p className="movie-list__more-description">{description}</p>
            <p
              onClick={() => {
                openMovieDataWindow(listNumber);
              }}
              className="movie-list__more-button"
            >
              czytaj mniej
            </p>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default Movie;
/*

 <Col md={3} className="movie-list__item">
      <Col md="12">
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
      </Col>
    </Col>

    */
