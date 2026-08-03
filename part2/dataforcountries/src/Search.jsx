const Search = ({setSearch, search}) => {
  return (
    <>
      <div>
        <p>Find countries
          <input 
            type="text" 
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </p>
      </div>
    </>
  )
}

export default Search