import React from 'react';

const Persons = ({person, handleDelete}) => {
    return (
      <div>
        <label>{person.name} {person.number} </label>
        <button onClick={()=>handleDelete(person)}> Delete </button>
      </div>
    )
  }

  export default Persons;