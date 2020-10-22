import React from 'react';
import Country from '../Country/Country.js';
import './CountryList.css';

const CountryList = (props) => {
	return (
		<div className="CountryList">
			{ props.stats.map( (country)=> <Country key={country.CountryCoude} stats={country}/> ) }
		</div>
	)
}

export default CountryList;