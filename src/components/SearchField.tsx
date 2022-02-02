import React , {useState} from 'react'
import { Company } from '../types/types'

interface Props {
    state:Company[];
    setstate: React.Dispatch<React.SetStateAction<Company[]>>
}

const SearchField:React.FC<Props> = ( {state, setstate}) => {

    const [searInput, setSearInput] = useState<string>('')

    function handleChange (e:any) {
        console.log('e :>> ', e);
    }

    return (
        <form>
            <label htmlFor="searchInput"></label>
            <input type="text" id="searchInput" placeholder="Type to search" onChange={handleChange}/>
        </form>
    )
}

export default SearchField
