import React , {useState} from 'react'
import { booleanFilterListOnObjectKey } from '../lib/shared';
import { C, Company } from '../types/shared'

interface Props {
    state:Company[];
    setstate: React.Dispatch<React.SetStateAction<Company[]>>
}

const SearchField:React.FC<Props> = ( {state, setstate}) => {
    const [searchInput, setSearchInput] = useState<string>('')
    console.log('searchInput :>> ', searchInput);

    const unselectedList = booleanFilterListOnObjectKey(state, "isSelected");
    console.log('unselectedList :>> ', unselectedList);

    // const stringFilterListOnObjectKey = ( list :Company[] , keyCriteria:C, valueCriteria:any) => {
    //     console.log('keyCriteria :>> ', keyCriteria);
    //     return unselectedList.filter(item => console.log(typeof(item[keyCriteria])))
    // }
    // const searchResultList = stringFilterListOnObjectKey(unselectedList, "title", "e")
    const searchResultList = unselectedList.filter(item => item.title.includes(searchInput))
    
    console.log('searchResultList :>> ', searchResultList);
    
    
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
