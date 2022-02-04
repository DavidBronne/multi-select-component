import React , {useState} from 'react'
// import { filterListOnObjectKey } from '../lib/shared';
import { Company } from '../types/shared'

interface Props {
    setSearchInput: (searchInput:string) => void
}

const SearchField:React.FC<Props> = ( {setSearchInput}) => {


    // const unSelectedList = filterListOnObjectKey(state, "isSelected");
    // console.log('unselectedList :>> ', unSelectedList);

    // const searchResultList = unSelectedList ? filterListOnObjectKey(unSelectedList, "title", searchInput) : [];
    // console.log('searchResultList :>> ', searchResultList);
    
    
    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <form>
            <label htmlFor="searchInput"></label>
            <input type="text" id="searchInput" placeholder="Type to search" onChange={handleChange}/>
        </form>
    )
}

export default SearchField
