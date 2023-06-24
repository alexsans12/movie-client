import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Hero = ({ movies }) => {
    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

    return (
        <section className="movie-carousel-container">
            <Carousel>
                {movies?.map((movie) => {
                    return (
                        <Paper key={movie.imdbId}>
                            <article className="movie-card-container">
                                <div
                                    className="movie-card"
                                    style={{
                                        "--img": `url(${movie.backdrops[0]})`,
                                    }}>
                                    <div className="movie-detail">
                                        <figure className="movie-poster">
                                            <img src={movie.poster} alt="" />
                                        </figure>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className="movie-buttons-container">
                                            <Link
                                                to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`} >
                                                <div className="play-button-icon-container">
                                                    <FontAwesomeIcon
                                                        className="play-button-icon"
                                                        icon={faCirclePlay}
                                                    />
                                                </div>
                                            </Link>

                                            <div className="movie-review-button-container">
                                                <Button
                                                    variant="info"
                                                    onClick={() =>
                                                        reviews(movie.imdbId)
                                                    }
                                                >
                                                    Reviews
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Paper>
                    );
                })}
            </Carousel>
        </section>
    );
};

export default Hero;
