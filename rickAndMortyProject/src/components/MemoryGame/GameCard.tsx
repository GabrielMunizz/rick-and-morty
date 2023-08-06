import { useState, useEffect } from 'react';

type imageURLProp = {
  imageURL: string;
  handleClick: (url: string) => void;
  memoryFirstImg: string;
  memorySecondImg: string;    
}

const GameCard = ({ imageURL, handleClick, memoryFirstImg, memorySecondImg }: imageURLProp) => {
  const [revealFront, setRevealFront] = useState<string>(''); 
  
  useEffect(() => {
    if (memoryFirstImg === imageURL){
      setRevealFront('revealFront');
    }
  }, [memoryFirstImg, memorySecondImg])
    
  return(
    <div className={`gameCardContainer ${ revealFront }`} onClick={() => handleClick(imageURL) }>
      <div className='gameCard back'/>
      <img className='gameCard front ' 
           src={ imageURL } 
           alt="characters image" 
            />
    </div>
  )
}

export default GameCard;