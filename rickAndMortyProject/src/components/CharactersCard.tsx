import { CharacterType } from '../types';
import { Link } from 'react-router-dom';

type CharactersCardProp = {
  character: CharacterType
}

const CharactersCard = ({ character }: CharactersCardProp) => {
  const { id, name, image, } = character;
  return(
    <Link to={`/home/character/${ id }`}>
    <section key={ id } className='card'>
      <img src={ image } alt={ name } />
      <div className='cardBio'>
      <p>{`Name: ${ name }`}</p>
      </div>
    </section>
    </Link>
  )
}

export default CharactersCard;