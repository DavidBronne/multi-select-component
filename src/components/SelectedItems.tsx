import React from 'react';
import { PropsSelectedItems } from '../types/shared';
import ItemCard from './ItemCard';

const SelectedItems:React.FC<PropsSelectedItems> = ( {selectedList , toggleIsSelected} ) => {
  return (
    <div className="selection-view">
        {selectedList.map(item => {
            return (
            <div key={item.id} onClick={() => toggleIsSelected(item.id)}>
                <ItemCard title={item.title}/> 
            </div>
            )
        })}
    </div>
  )
};

export default SelectedItems;
