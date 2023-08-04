import { useState } from 'react';

type imageURLProp = {
  imageURL: string;  
}

const GameCard = ({ imageURL }: imageURLProp) => {
  const [revealFront, setRevealFront] = useState<string>('');
 
  const handleClick = ({target}: React.MouseEvent<HTMLInputElement>) => { 
    if (revealFront === '') {
      setRevealFront('revealFront');
      console.log(target);
    } else {
      setRevealFront('');
      console.log(target);
    }
  }

  return(
    <div className={`gameCardContainer ${revealFront}`} onClick={ handleClick }>
      <div className='gameCard back' />
      <img className='gameCard front ' src={ imageURL } alt="characters image" />
    </div>
  )
}

export default GameCard;