import React from 'react';
import { PropsClearButton } from '../types/shared';

const ClearButton:React.FC<PropsClearButton> = ( {clearAllSelectionAndSearch , selectedList} ) => {
  
  const isDisabled = selectedList.length ? false : true ;
  
  return (
    <button 
      onClick={clearAllSelectionAndSearch} 
      disabled={isDisabled}
    >
      Clear All
    </button>
  );
};

export default ClearButton;
