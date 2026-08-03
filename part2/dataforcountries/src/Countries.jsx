import Country from "./Country"

const Countries = ({countriesToShow}) => {
  return (
    <>
      {
        countriesToShow.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))
      }
    </>
  )
}

export default Countries