import React from 'react';
import { PropsSearchField } from '../types/MultiSelect';

const SearchField:React.FC<PropsSearchField> = ( {setSearchInput , searchInput}) => {
    
    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <form >
            <label htmlFor="search-input"></label>
            <input
                className = "input" 
                type="text" 
                id="search-input" 
                value={searchInput} 
                placeholder="Type to search" 
                onChange={handleChange}
            />
        </form>
    )
}

export default SearchField
