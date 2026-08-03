import { useState } from "react"
import Country from "./Country"

const Countries = ({countriesToShow}) => {
  const [selectedCountry, setSelectedCountry] = useState({})
  const [showCountry, setShowCountry] = useState(false)

  return (
    <>
      {
        countriesToShow.map((country) => ( 
          <>
          <p key={country.name.common}>{country.name.common}
            <button onClick={
              () => {setSelectedCountry(country), setShowCountry(prev => !prev)}
            }>Show</button>
          </p>
          
          </>
        ))
      }
      {showCountry && (
        <Country country={selectedCountry}/>
      )}
    </>
  )
}

export default Countries