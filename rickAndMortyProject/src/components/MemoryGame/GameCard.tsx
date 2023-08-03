
type imageURLProp = {
  imageURL: string;
}

const GameCard = ({ imageURL }: imageURLProp) => {
 

  return(
    <div className='gameCardContainer'>
      <div className='gameCard back' />
      <img className='gameCard front' src={imageURL} alt="characters image" />
    </div>
  )
}

export default GameCard;