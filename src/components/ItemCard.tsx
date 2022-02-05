import React , {useState} from 'react';
import '../styles/MultiSelect.css';
import { PropsItemCard } from '../types/MultiSelect';

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
