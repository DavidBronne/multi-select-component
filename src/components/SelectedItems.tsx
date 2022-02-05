import React from 'react';
import { Company } from '../types/shared';
import ItemCard from './ItemCard';


interface Props {
    selectedList:Company[];
    toggleIsSelected: (id:number) => void
}

const SelectedItems:React.FC<Props> = ( {selectedList , toggleIsSelected} ) => {
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
