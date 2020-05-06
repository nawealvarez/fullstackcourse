import React from 'react';

const CountriesFilter =({value, onChange}) =>{
    return(
        <>
        <label htmlFor="countries-search">Find countries</label>
        <input
            type="text"
            id="countries_filter"
            value={value}
            onChange={onChange}/>
        </>
    )

}
export default CountriesFilter;

