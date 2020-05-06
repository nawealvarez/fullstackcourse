import React, {useState, useEffect} from 'react'

import weatherService from '../services/weatherService'

const CityWeather = ({city}) =>{
    const [weatherData, setWeatherData] = useState({})
    const [hasData, setHasData] = useState(false)

    const hook =() =>{
        weatherService.cityWeather(city).then(data=>{
            setHasData(true)
            setWeatherData({
                temperature: data.current.temperature,
                icon: data.current.weather_icons[0],
                windSpeed: data.current.wind_speed,
                windDir: data.current.wind_dir
        })
    })}
    useEffect(hook,[])

    return hasData ?(
        <>
            <h3> Weather in {city}</h3>
            <p>
                <strong>temperature:</strong> {weatherData.temperature} Celsius
            </p>
            <img src={weatherData.icon} alt="icon"/>
            <p>
                <strong>wind:</strong> {weatherData.windSpeed} mph direction {weatherData.windDir}
            </p>
        </>

    ) : null
}

export default CityWeather;