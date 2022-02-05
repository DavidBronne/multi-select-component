import React from 'react'
import { Company } from '../types/shared'
import ItemCard from './ItemCard'

interface Props {
    searchResult:Company[],
    toggleIsSelected: (id:number) => void
}

const SearchResult:React.FC<Props> = ({searchResult , toggleIsSelected}) => {
    return (
        <div className="selection-view">
            {searchResult?.map( company => {
                return (
                    <div key={company.id} onClick={() => toggleIsSelected(company.id)} >
                        <ItemCard title={company.title} />
                    </div>
                )
            })}
        </div> 
    ) 
}

export default SearchResult
