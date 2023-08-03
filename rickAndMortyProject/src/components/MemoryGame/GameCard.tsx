
type imageURLProp = {
  imageURL: string;
  handleClick: ({ target }: React.MouseEvent<HTMLInputElement>) => void;
}

const GameCard = ({ imageURL, handleClick }: imageURLProp) => {
 

  return(
    <div className='gameCardContainer ' onClick={ handleClick }>
      <div className='gameCard back' />
      <img className='gameCard front ' src={ imageURL } alt="characters image" />
    </div>
  )
}

export default GameCard;