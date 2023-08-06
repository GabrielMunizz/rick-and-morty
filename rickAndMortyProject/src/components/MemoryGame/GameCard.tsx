import { CardType } from '../../types';

type imageURLProp = {
  imageURL: string;   
  id: number; 
  handleClick: (id: number, url: string) => void;
  selectedCard: CardType;
  firstSelectedCard: CardType;
  secondSelectedCard: CardType;  
}

const GameCard = ({ imageURL, id, handleClick, selectedCard }: imageURLProp) => {
  // const [revealFront, setRevealFront] = useState<string>('');

  // const handleReveal = () => {
  //   if (revealFront === '') {
  //     setRevealFront('revealFront')      
  //   }
  // }
  
      
  return(
    <div className={`gameCardContainer ${ selectedCard.id === id ? selectedCard.selected : '' }`}  onClick={() => handleClick(id, imageURL)}>
      <div className='gameCard back'/>
      <img className='gameCard front' 
           src={ imageURL } 
           alt="characters image" 
            />
    </div>
  )
}

export default GameCard;