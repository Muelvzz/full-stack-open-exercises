import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 123456 }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App