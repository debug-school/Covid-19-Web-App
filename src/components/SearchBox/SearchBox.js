import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
	return (
		<div>
			<input type="search"
				className="search"
				placeholder={props.placeholder}
				onChange={props.handleChange}
				vale={props.value}
			/>
		</div>
	)
}

export default SearchBox;