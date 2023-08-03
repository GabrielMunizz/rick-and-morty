
type imageURLProp = {
  imageURL: string;
}

const GameCard = ({ imageURL }: imageURLProp) => {
 

  return(
    <div>
      <img src={imageURL} alt="characters image" />
    </div>
  )
}

export default GameCard;