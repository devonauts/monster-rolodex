import React from 'react';
import './search-box.styles.scss';

const SearchBox = ({placeholder, handleChange}) => (
    <input 
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
    className= 'search'
    />

)

export default SearchBox;