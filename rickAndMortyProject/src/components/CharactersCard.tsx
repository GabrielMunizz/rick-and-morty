import { CharacterType } from '../types';
import { Link } from 'react-router-dom';

type CharactersCardProp = {
  character: CharacterType
}

const CharactersCard = ({ character }: CharactersCardProp) => {
  const {
    id,
    name,    
    image,
  } = character;
  return(
    <section key={id} className='card'>
      <img src={image} alt={name} />
      <div>
      <p>{`Name: ${name}`}</p>
      </div>
      <Link to='/home/character/:id'>See full bio</Link>  
    </section>
  )
}

export default CharactersCard;