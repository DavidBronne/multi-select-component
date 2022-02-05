import React from 'react';
import { PropsSearchResult } from '../types/shared';
import ItemCard from './ItemCard';

const SearchResult:React.FC<PropsSearchResult> = ({searchResult , toggleIsSelected}) => {
    return (
        <div className="selection-view">
            {searchResult?.map( item => {
                return (
                    <div key={item.id} onClick={() => toggleIsSelected(item.id)} >
                        <ItemCard title={item.title} />
                    </div>
                )
            })}
        </div> 
    ) 
}

export default SearchResult
