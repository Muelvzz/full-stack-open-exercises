import { useState, useEffect } from "react"
import getWeather from "./services/weatherData"
import Weather from "./Weather"

const Country = ({country}) => {
  const [countryWeather, setCountryWeather] = useState(null)

  useEffect(() => {
    getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
    .then(data => setCountryWeather(data))
  }, [country.capitalInfo.latlng[0],country.capitalInfo.latlng[1]])

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.keys(country.languages).map((key) => (
            <li key={key}>{country.languages[key]}</li>
          ))}
      </ul>
      <img 
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}  
        style={{width: "200px"}}
      />
      {countryWeather && (
        <Weather
          name={country.capital[0]}
          weather={countryWeather}
        />
      )}
    </>
  )
}

export default Country