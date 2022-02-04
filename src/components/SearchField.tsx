import React , {useState} from 'react'
// import { filterListOnObjectKey } from '../lib/shared';
import { Company } from '../types/shared'

interface Props {
    setSearchInput: (searchInput:string) => void;
    searchInput:string
}

const SearchField:React.FC<Props> = ( {setSearchInput , searchInput}) => {
    
    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <form>
            <label htmlFor="searchInput"></label>
            <input type="text" id="searchInput" value={searchInput} placeholder="Type to search" onChange={handleChange}/>
        </form>
    )
}

export default SearchField
