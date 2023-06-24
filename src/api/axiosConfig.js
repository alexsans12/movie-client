import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080'
    //baseURL: 'https://alexsans-movies-api-8e00ee09b66e.herokuapp.com'
});