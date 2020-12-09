import { useState } from 'react'
import Country from './Country'

const DisplayCountries = ({ countries }) => {
    const [display, setDisplay] = useState(
        countries
            .map((country) =>
                <div key={country.id}>
                    <div>{country.name}</div>
                    <button onClick={() => handleClick(country)}>show</button>
                </div>
            ))
    const handleClick = (country) => {
        setDisplay(<Country country={country} />)
    }
    return display
}

export default DisplayCountries