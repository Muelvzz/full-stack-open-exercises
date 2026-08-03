const Weather = ({name, weather}) => {
  return (
    <>
      <h2>Weather in {name}</h2>
      <p>Temperature: {weather.main.temp}</p>
        <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        />
      <p>wind {weather.wind.speed} m/s</p>
    </>
  )
}

export default Weather