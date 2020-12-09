import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "../index.css"

const Country = ({ country }) => {
    const apiKey = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState({})
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}`)
            .then(response => {
                const newWeather = {
                    temperature: response.data.main.temp,
                    wind: response.data.wind.speed
                }
                setWeather(newWeather)
            })
    }, [country.capital, apiKey])

    return (
        <div>
            <h2>{country.name}</h2>
            <div>Capital {country.capital}</div>
            <div>Population {country.population}</div>
            <h3>Languages</h3>
            <ul>
                {country.languages
                    .map((language, id) =>
                        <li key={id}>
                            {language.name}
                        </li>)}
            </ul>
            <img className='photo' src={country.flag} alt='country flag' />

            <h3>Weather in {country.capital}</h3>
            <h4>Temperature: {(weather.temperature - 273).toFixed()} Degrees Celcius</h4>
            <h4>Wind: {weather.wind} m/s</h4>
        </div>
    )
}

export default Country