import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filterName, setFilterName] = useState("")

  useEffect(() => {
    personService.getAll().then(initial => {setPersons(initial)})
  }, [])

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