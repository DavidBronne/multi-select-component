import React from 'react';
import { PropsList } from '../types/MultiSelect';
import ItemCard from './ItemCard';

const List:React.FC<PropsList> = ({ list , toggleIsSelected, name }) => {
    return (
        <div className="selection-view">
            <div className="title">{name}</div>
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

export default List;
