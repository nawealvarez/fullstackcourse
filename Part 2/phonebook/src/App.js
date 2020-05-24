import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonsForm from './components/PersonsForm';
import Notification from './components/Notification';
import personService from './services/person';

const App = () => {
  const [ persons, setPersons ] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [searchPerson, setSearchPerson] = useState('');
  const [notification, setNotification] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        }).catch(() => {
          setErrorMessage(
            `Information of ${name} has already removed from the server`);
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000);
            setPersons(persons.filter(person => person.id !== id));
          });
    }
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
          setPersons(persons.concat(returnedPerson));
          setNotification(`Added ${returnedPerson.name}`);
        }).catch(err => {
          setErrorMessage(err.response.data.error);
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000);
          setPersons(persons.filter(person => person.id !== personObject.id));
        });
      }
      else {
        const answer = window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)
        if (answer){
          const changedPerson = {...found, number: newNumber}
          personService
            .update(changedPerson.id, changedPerson)
            .then(returnedPerson =>{
              setPersons(persons.map(person =>
                person.id !== changedPerson.id ? person : returnedPerson));
              setNotification(`Number of ${changedPerson.name} changed`);
            })
            .catch(err =>{
              setPersons(
                persons.filter(person =>person.id !== changedPerson.id)
              );
              setErrorMessage(
                `Information of ${changedPerson.name} has already been removed from the server`
              );
            });
        }  
      }
      setNewName('');
      setNewNumber('');
      setTimeout(()=>{
        setNotification('');
        setErrorMessage('');
      }, 5000);
    }; 
  
  return (
    <div>
      <h2>Phonebook</h2>
        {errorMessage 
        ? <Notification message={errorMessage} isError={true}/>
        : (notification 
          ? <Notification message={notification} isError={false}/>
          :null)}

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