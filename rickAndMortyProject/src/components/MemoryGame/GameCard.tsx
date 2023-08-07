// import { useEffect, useState } from 'react';
import { CardType } from '../../types';

type imageURLProp = {
  imageURL: string;   
  id: number; 
  handleClick: (id: number, url: string) => void;
  selectedCard: CardType[];
  revealFront: string;     
}

const GameCard = ({ imageURL, id, handleClick, revealFront, selectedCard }: imageURLProp) => {
        
  return(
    <div className={`gameCardContainer ${selectedCard.some((card)=> card.id === id) ? revealFront : '' }`}  onClick={ () => handleClick(id, imageURL)}>
      <div className='gameCard back'/>
      <img className='gameCard front' 
           src={ imageURL } 
           alt="characters image" 
            />
    </div>
  )
}

export default GameCard;