import React from 'react';
import { PropsSearchField } from '../types/shared';

const SearchField:React.FC<PropsSearchField> = ( {setSearchInput , searchInput}) => {
    
    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <form >
            <label htmlFor="searchInput"></label>
            <input
                className = "input" 
                type="text" 
                id="searchInput" 
                value={searchInput} 
                placeholder="Type to search" 
                onChange={handleChange}
            />
        </form>
    )
}

export default SearchField
