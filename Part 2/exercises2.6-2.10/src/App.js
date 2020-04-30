import React, { useState } from 'react'

const Numbers = ({person}) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas', 
      number:'040-1234567'
    }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event)=>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const found = persons.some(el => el.name === personObject.name);
    if (!found) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')}
    else {window.alert(personObject.name + ' already exists')}

  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <diV>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </diV>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Numbers key={person.name} person={person}/>)}
    </div>
  )
}

export default App;
