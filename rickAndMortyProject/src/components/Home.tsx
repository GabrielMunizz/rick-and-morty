import { useState, useEffect } from 'react';
import { CharacterType } from '../types';
import CharactersCard from './CharactersCard';
import Loading from './Loading';

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
  console.log(pageNavigation); // PARA COLOCAR O NUMERO DE PAGINAS NO RODAPÉ 
  return(
    <main id='mainHome'>
      <section className='cardContainer'>
        {loading && (
          <>
            <h1>Loading...</h1>
            <Loading />
          </>
        )}
        {!loading && (
          characters.map((character) => <CharactersCard key={character.id} character={ character } />)
        )}
      </section>
    </main>
  )
}

export default Home;