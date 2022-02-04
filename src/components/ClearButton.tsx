import React from 'react';

interface Props {
    clearAllSelectionAndSearch: () => void
}

const ClearButton:React.FC<Props> = ( {clearAllSelectionAndSearch} ) => {
  return (
    <button onClick={clearAllSelectionAndSearch}>
        Clear All
    </button>
  );
};

export default ClearButton;
