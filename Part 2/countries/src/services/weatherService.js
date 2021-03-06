import axios from 'axios';

const key = "YourApiKey" //here goes the apikey from the url
const url = "http://api.weatherstack.com"

const cityRequest = city =>
    `${url}/current?access_key=${key}&query=${city}`;

const cityWeather = city =>{
    const request = axios.get(cityRequest(city))
    return request.then(response => response.data)
}

export default {cityWeather};
