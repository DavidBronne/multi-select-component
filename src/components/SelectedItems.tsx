import React from 'react';
import { Company } from '../types/shared';

interface Props {
    selectedList:Company[];
    toggleIsSelected: (id:number) => void
}

const SelectedItems:React.FC<Props> = ( {selectedList , toggleIsSelected} ) => {
  return <div>
      {selectedList.map(item => {
          return (
              <div key={item.id} onClick={() => toggleIsSelected(item.id)}>{item.title}</div>
          )
      })}
  </div>;
};

export default SelectedItems;
