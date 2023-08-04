import { useState } from 'react';

type imageURLProp = {
  imageURL: string;  
}

const GameCard = ({ imageURL }: imageURLProp) => {
  const [revealFront, setRevealFront] = useState<string>('');
  const [targetImgURL, setTargetImgURL] = useState<string>('');
  const [compareImages, setCompareImages] = useState<string>('');
 
  const handleClick = () => { 
    if (!revealFront) {
      setRevealFront('revealFront');         
    }
    if (targetImgURL === '') {
      setTargetImgURL(imageURL);
    } else if (targetImgURL && compareImages === '') {
      setCompareImages(imageURL);
    }
  }
  
  console.log(`targetIMAGE = ${targetImgURL}`);
  console.log(`compareIMAGE = ${compareImages}`)


  return(
    <div className={`gameCardContainer ${revealFront}`} onClick={ handleClick }>
      <div className='gameCard back'/>
      <img className='gameCard front ' 
           src={ imageURL } 
           alt="characters image" 
            />
    </div>
  )
}

export default GameCard;