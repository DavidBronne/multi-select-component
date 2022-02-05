import React from 'react';
import { PropsList } from '../types/MultiSelect';
import ItemCard from './ItemCard';

const List:React.FC<PropsList> = ({list , toggleIsSelected}) => {
    return (
        <div className="selection-view">
            {list?.map( item => {
                return (
                    <div key={item.id} onClick={() => toggleIsSelected(item.id)} >
                        <ItemCard title={item.title} />
                    </div>
                )
            })}
        </div> 
    ) 
}

export default List
