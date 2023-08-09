import { CardType } from '../../types';

type imageURLProp = {
  imageURL: string;   
  id: number; 
  handleClick: (id: number, url: string) => void;
  selectedCard: CardType[];
  matchedCards: CardType[];
  revealFront: string;     
}

const GameCard = ({ imageURL, id, handleClick, revealFront, selectedCard, matchedCards }: imageURLProp) => {
   const revealSelectedCard = selectedCard.some((card)=> card.id === id);
   const revealMatchedCards = matchedCards.some((cards) => cards.id === id);

  
   return(
    <div className={`gameCardContainer ${ (revealSelectedCard || revealMatchedCards) ? revealFront : '' }`}  
         onClick={ () => handleClick(id, imageURL) }>
      <div className='gameCard back'/>
      <img className='gameCard front' 
           src={ imageURL } 
           alt="characters image" 
            />
    </div>
  )
}

export default GameCard;