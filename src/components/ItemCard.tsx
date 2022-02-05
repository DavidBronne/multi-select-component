import React from 'react';
import '../styles/ItemCard.css';

interface Props {
    title: string
}

const ItemCard:React.FC<Props> = ( {title} ) => {
  return (
    <div className="item-card">
      {title}
    </div>
  );
};

export default ItemCard;
