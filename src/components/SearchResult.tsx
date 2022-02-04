import React from 'react'
import { Company } from '../types/shared'

interface Props {
    searchResult:Company[],
    toggleIsSelected: (id:number) => void
}

const SearchResult:React.FC<Props> = ({searchResult , toggleIsSelected}) => {
    return (
        <div >
            {searchResult?.map( company => {
                return (
                    <div key={company.id} onClick={() => toggleIsSelected(company.id)} >{company.title}</div>
                )
            })}
        </div> 
    ) 
}

export default SearchResult
