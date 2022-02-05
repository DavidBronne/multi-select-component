import React from 'react';
import { PropsClearButton } from '../types/shared';

const ClearButton:React.FC<PropsClearButton> = ( {clearAll , selectedList} ) => {
  
  const isDisabled = selectedList.length ? false : true ;
  
  return (
    <button 
      onClick={clearAll} 
      disabled={isDisabled}
    >
      Clear All
    </button>
  );
};

export default ClearButton;
