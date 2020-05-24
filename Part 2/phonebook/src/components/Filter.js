import React from 'react';

const Filter = ({searchPerson, handleSearch}) =>{
    return(
      <div>
          <form>
            <div>
              filter shown with <input value={searchPerson} onChange={handleSearch}/>
            </div>
          </form>
        </div>
    )
  }

  export default Filter;