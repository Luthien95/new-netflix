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

  console.log(backgroundImage);
  console.log(backgroundImage[0].attributes);
  /*
  const filtered = data.filter((entry) =>
    Object.values(entry).some(
      (val) => typeof val === "string" && val.includes(keyword)
    )
  );
*/
  const movieImage = backgroundImage.filter((image) =>
    Object.values(image.attributes).some(
      (val) => typeof val === "string" && val.includes("170")
    )
  );

  var backgroundImageUrl = movieImage[0].label;

  var movieStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8)), url(${backgroundImageUrl})`,
  };

  return (
    <Col md={3} className="movie-list__item">
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
      <Col md="12" className="movie-list__more" style={movieStyle}>
        <Row>
          <Col>
            <p className="movie-list__more-category">{category}</p>
            <p className="movie-list__more-description">{description}</p>
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
