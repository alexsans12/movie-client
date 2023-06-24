import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import NotFound from "./components/notFound/NotFound";

function App() {
    const [movies, setMovies] = useState();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);

    const getMovies = async () => {
        try {
            // Send a GET request to the "/api/v1/movies" API endpoint
            const response = await api.get("/api/v1/movies");
    
            // Update the movies state variable with the retrieved movie data
            setMovies(response.data);
        } catch (err) {
            // If an error occurs during the API request, log the error
            console.log(err);
        }
    };
    

    const getMovieData = async (movieId) => {
        try {
            // Send a GET request to the API endpoint with the provided movieId
            const response = await api.get(`/api/v1/movies/${movieId}`);
    
            // Extract the movie data from the response
            const singleMovie = response.data;
    
            // Update the movie state variable with the retrieved movie data
            setMovie(singleMovie);
    
            // Update the reviews state variable with the reviews from the retrieved movie data
            setReviews(singleMovie.reviewIds);
        } catch (error) {
            // If an error occurs during the API request or data extraction, log the error
            console.log(error);
        }
    };

    useEffect(() => {
        // Call the getMovies function when the component mounts
        getMovies();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home movies={movies} />}></Route>
                    <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
                    <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} reviews={reviews} setReviews={setReviews} movie={movie} />}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
