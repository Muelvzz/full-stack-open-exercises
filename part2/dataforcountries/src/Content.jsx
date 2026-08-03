import Country from "./Country"
import Countries from "./Countries"

const Content = ({countriesToShow, search}) => {
  
  if (countriesToShow.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }

  if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
    return (
      <Countries
        countriesToShow={countriesToShow}
      />
    )
  }

  if (countriesToShow.length === 1) {
    return (
      <Country
        country={countriesToShow[0]}
      />
    )
  }
}

export default Content