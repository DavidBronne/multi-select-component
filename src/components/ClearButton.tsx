import React from 'react';
import { PropsClearButton } from '../types/shared';

const ClearButton:React.FC<PropsClearButton> = ( {clearAllSelectionAndSearch} ) => {
  return (
    <button onClick={clearAllSelectionAndSearch}>
        Clear All
    </button>
  );
};

export default ClearButton;
