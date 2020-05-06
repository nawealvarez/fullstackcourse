import React, { useState, useEffect } from "react";
import axios from 'axios';
import CountriesFilter from "./components/CountriesFilter";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [countriesFilter, setCountriesFilter] = useState("")
  const [countries, setCountries] = useState([])

  const filteredCountries = countriesFilter
    ? countries.filter(
        country =>
          country.name.toLowerCase().search(countriesFilter.toLowerCase()) !==-1
      )
    : countries

  const hook= () => {    
    console.log('effect')    
    axios
      .get('https://restcountries.eu/rest/v2/all')      
      .then(response => {        
        console.log('promise fulfilled')        
        setCountries(response.data)
      })
    } 
  useEffect(hook,[])
    
  const handleCountriesFilterChange = event => {
    setCountriesFilter(event.target.value)
  }

  const changeCountriesFilter = filter => {
    setCountriesFilter(filter)
  }

  return (
    <div className="App">
      <CountriesFilter
        value={countriesFilter}
        onChange={handleCountriesFilterChange}
      />
      <CountryInfo
        countries={filteredCountries}
        changeFilter={changeCountriesFilter}
      />
    </div>
  )
}

export default App;