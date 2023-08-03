
type imageURLProp = {
  imageURL: string;
}

const GameCard = ({ imageURL }: imageURLProp) => {
 

  return(
    <div className='gameImagesContainer'>
      <div className='gameCard front' />
      <img className='gameCard back' src={imageURL} alt="characters image" />
    </div>
  )
}

export default GameCard;