import React from 'react';
import { Company } from '../types/shared';

interface Props {
    selectedList:Company[]
}

const SelectedItems:React.FC<Props> = ( {selectedList} ) => {
  return <div>
      {selectedList.map(item => {
          return (
              <div key={item.id}>{item.title}</div>
          )
      })}
  </div>;
};

export default SelectedItems;
