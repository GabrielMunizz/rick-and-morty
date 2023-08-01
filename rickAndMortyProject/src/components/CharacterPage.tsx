import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CharacterType } from '../types';
import { Link } from 'react-router-dom';
import { StyledBtn } from '../style/StyledBtn.style';
import Loading from './Loading';

const initialChar = {
id: 0,
name: '',
status: '',
species: '',
type: '',
gender: '',
image: '',
origin: {
    name: '',
    url: '',
},
location: {
    name: '',
    url: '',
},
episode: [''],
}

const CharacterPage = () => {
  const [ loading, setLoading ] = useState(true);
  const [ character, setCharacter ] = useState<CharacterType>(initialChar as CharacterType);
  const { name, status, species, type, gender, image, origin, location, episode } = character;
  const { id } = useParams();
  const idAsNumber = Number(id);
  
  const regex = /\/(\d+)$/;
  const episodeNum = episode.map((episodes) =>{
    const match = episodes.match(regex);
    return match ? Number(match[1]) : null;
  })
  
  useEffect(() => {
    const getChar = async () => {
      const result = await fetch(`https://rickandmortyapi.com/api/character/${ id }`)
      const data = await result.json();
      setCharacter(data);
      setLoading(false);
    }
    setTimeout(() => {
      getChar();      
    }, 500)
  }, [id]);
  return(
    <>
    {loading && <Loading />}
    {!loading && (
    <section id='charPageSection'>
      <div id='charPageCard'>
        <div id='imageAndBio'>
          <img src={ image } alt={ name } />        
          <div id='charInfoContainer'>
            <h1>{ `Name: ${ name }` }</h1>
            <h3>{`Species: ${ species }`}</h3>
            <h3>{`Gender: ${ gender }`}</h3>
            <h3>{`Status: ${ status }`}</h3>
            <h3>{ type ? `Type: ${ type }` : false}</h3>
            <h3>{`Origin: ${ origin.name }`}</h3>
            <h3>{`Last known location: ${ location.name }`}</h3>
          </div>
        </div>       
        <div id='episodeLisContainer'>
          <h3>Episode(s):</h3>
          <div id='episodeList'>
            {episodeNum.map((ep) => <p>{(episodeNum.length === 1) || (episodeNum.indexOf(ep) === episodeNum.length - 1) ? `${ep}.` : `${ep}, `}</p> )}            
          </div>
        </div>
      </div>
      <div id='nxtPrev'>
        <Link to={`/home/character/${idAsNumber  - 1}`}><StyledBtn>Previous</StyledBtn></Link>
        <Link to={`/home/character/${idAsNumber  + 1}`}><StyledBtn>Next</StyledBtn></Link>
      </div>
    </section>
    )}
    </>
  )
}

export default CharacterPage;