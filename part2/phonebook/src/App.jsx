import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filterName, setFilterName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.some(person => person.name === newName.trim())) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(prev => [...prev, {name: newName.trim(), number: newNumber.trim()}])
      setNewName("")
      setNewNumber("")
    }
  }

  const personsToShow = persons.filter(person => (
    person.name.toLowerCase().includes(filterName.toLowerCase())
  ))

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shows with <input 
        type="text" 
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      /></p>
      <h3>Add a new</h3>
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
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App