import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

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
      <Filter 
        filterName={filterName} 
        setFilterName={setFilterName}
      />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App