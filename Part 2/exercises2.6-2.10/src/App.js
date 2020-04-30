import React, { useState } from 'react'

const Numbers = ({person}) => {
  return (
    <p>{person.name}</p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event)=>{
    event.preventDefault()
    const personObject = {
      name: newName
    }
    const found = persons.some(el => el.name === personObject.name);
    if (!found) {
      setPersons(persons.concat(personObject))
      setNewName('')}
    else {window.alert(personObject.name + ' already exists')}

  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
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
