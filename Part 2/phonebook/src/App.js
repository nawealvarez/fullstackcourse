import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';
import personService from './services/person';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searchPerson, setSearchPerson] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons =>{
        setPersons(initialPersons)
      })
      .catch(err =>{
        console.log(err)
      })
  }, [])

  const personsToShow = !searchPerson
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

  const handleDelete = personToDelete =>{
    const {id, name} = personToDelete;
    const answer = window.confirm(`Delete '${name}'?`);
    if (answer){
      personService
        .remove(id)
        .then(() =>{
          setPersons(persons.filter(person => person.id !== id));
          window.alert(`${name} has been removed!`);
        }).catch(err => console.log(err));
    }
    console.log(answer, id);
  }
  
  const handleAdd = (event)=>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      id: persons.length + 1
    }
    const found = persons.find(el => el.name.toLowerCase() === personObject.name.toLowerCase())
    if (!found) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        }).catch(err => {
          alert(`theres is an issue with '${personObject.content}'`)
          console.log(err)
        })
      }
      else {
        const answer = window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)
        if (answer){
          const changedPerson ={...found, number: newNumber}
          personService
            .update(changedPerson.id, changedPerson)
            .then(returnedPerson =>{
              setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
              setNewName('')
              setNewNumber('')
            })
            .catch(err =>console.log(err));
        }  
      }
    } 
  
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchPerson={searchPerson} handleSearch={handleSearch}/>
        <div>
          <h2>add a new</h2>
          <PersonsForm 
            onSubmit={handleAdd} 
            name={newName} 
            number={newNumber} 
            onChangeName={handleNameChange}
            onChangeNumber={handleNumberChange}/>
        </div>
        <h2>Numbers</h2>
        {personsToShow.map(person => 
          <Persons 
            key={person.id} 
            person={person} 
            handleDelete={handleDelete}/>)}
    </div>
  )
  
}

export default App;