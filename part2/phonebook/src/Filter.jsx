const Filter = ({filterName, setFilterName}) => {
  return (
    <>
      <p>filter shows with <input 
        type="text" 
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      /></p>
    </>
  )
}

export default Filter