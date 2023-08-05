import { useState } from 'react';

type imageURLProp = {
  imageURL: string;
  handleClick: (url: string) => void;    
}

const GameCard = ({ imageURL, handleClick }: imageURLProp) => {
  const [revealFront, setRevealFront] = useState<string>(''); 

  const handleReveal = () => {
    if (!revealFront) {
      setRevealFront('revealFront')
    }
  }

  return(
    <div className={`gameCardContainer ${revealFront}`} onClick={ () => (handleClick(imageURL), handleReveal()) }>
      <div className='gameCard back'/>
      <img className='gameCard front ' 
           src={ imageURL } 
           alt="characters image" 
            />
    </div>
  )
}

export default GameCard;