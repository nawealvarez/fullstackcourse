import React, { useState } from 'react'

const Numbers = ({person}) => {
  return (
    <p>{person.name} {person.number}</p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searchPerson, setSearchPerson] = useState('')
  
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

  const results = !searchPerson
    ? persons 
    : persons.filter(person =>
        person.name.toLocaleLowerCase().includes(searchPerson.toLocaleLowerCase()))
      

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    setSearchPerson(event.target.value)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form>
          <div>
            filter shown with <input value={searchPerson} onChange={handleSearch}/>
          </div>
        </form>
      </div>
      <div>
        <h2>ad a new</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <h2>Numbers</h2>
      {results.map(person => <Numbers key={person.name} person={person}/>)}
    </div>
  )
}

export default App;
