const PersonForm = ({handleSubmit, newName, newNumber, setNewName}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            name: <input
              type='text'
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            number: <input
              type='tel'
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm