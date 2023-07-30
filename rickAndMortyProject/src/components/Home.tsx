import { useState, useEffect } from 'react';
import { CharacterType } from '../types';
import CharactersCard from './CharactersCard';

const Home = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [ pageNavigation, setPageNavigation ] = useState() 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getApiInfo = async () => {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      setPageNavigation(data.info);
      setCharacters(data.results);
      setLoading(false);  
    }
    getApiInfo();

  }, [])
  console.log(characters)
  console.log(pageNavigation)
  
  return(
    <main>
      <section className='cardContainer'>
        {loading && (
          <h1>Loading...</h1>
        )}
        {!loading && (
          characters.map((character) => <CharactersCard key={character.id} character={ character } />)
        )}
      </section>
    </main>
  )
}

export default Home;