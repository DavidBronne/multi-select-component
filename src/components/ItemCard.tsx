import React from 'react';
import '../styles/ItemCard.css';
import { PropsItemCard } from '../types/shared';

const ItemCard:React.FC<PropsItemCard> = ( {title} ) => {
  return (
    <div className="item-card">
      {title}
    </div>
  );
};

export default ItemCard;
