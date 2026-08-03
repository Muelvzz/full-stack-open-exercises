import { useState, useEffect } from 'react'
import getAll from './services/countriesData'
import Search from './Search'
import Content from './Content'

function App() {
  const [countryData, setCountryData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAll().then(data => setCountryData(data))
  }, [])

  const countriesToShow = countryData.filter(country => (
    country.name.common.toLowerCase().includes(search.toLowerCase())
  ))
  
  return (
    <>
      <Search 
        setSearch={setSearch}
        search={search}
      />
      <Content 
        countriesToShow={countriesToShow}
        search={search}
      />
    </>
  )
}

export default App
