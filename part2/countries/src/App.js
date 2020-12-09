import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import DisplayCountries from './components/DisplayCountries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([{}])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const data = response.data
        const allCountries = data.map((country, id) => {
          const newCountry = country
          country.id = id
          return newCountry
        })
        console.log(allCountries);
        setCountries(allCountries)
      })
  }
    , [])

  const displayedCountries =
    filter === ''
      ? []
      : countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Find Countries</h2>
      <input value={filter} onChange={handleFilterChange} />
      {
        displayedCountries.length === 1
          ? <Country country={displayedCountries[0]} />
          : displayedCountries.length > 10
            ? <div>Too many matches, specify another filter</div>
            : <DisplayCountries countries={displayedCountries} />
      }
    </div>
  )
}

export default App;
