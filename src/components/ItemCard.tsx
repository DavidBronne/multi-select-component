import React , {useState} from 'react';
import '../styles/ItemCard.css';
import { PropsItemCard } from '../types/shared';

const ItemCard:React.FC<PropsItemCard> = ( {title} ) => {
  
  const [isHovered , setIsHovered] = useState<boolean>(false)

  const  className = "item-card" + (isHovered ? " hovering" : "")

  return (
    <div 
    className={className}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >         
      {title}
    </div>
  );
};

export default ItemCard;
