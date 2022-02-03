import React, {useState} from 'react'
import { Company } from '../types/types'
import SearchField from './SearchField'
interface Props {
    list:Company[];
}
const MultiSelect:React.FC<Props> = ({list}) => {
    const [state, setstate] = useState<Company[]>(list)
    return (
        <div>
            <SearchField state={state} setstate={setstate} />
        </div>
    )
}

export default MultiSelect
