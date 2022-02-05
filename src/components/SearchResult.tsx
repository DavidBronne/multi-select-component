import React from 'react';
import { PropsSearchResult } from '../types/shared';
import ItemCard from './ItemCard';

const SearchResult:React.FC<PropsSearchResult> = ({searchResult , toggleIsSelected}) => {
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
