import { useState, useEffect } from 'react';
import { CharacterType } from '../types';
import CharactersCard from './CharactersCard';
import Loading from './Loading';
import { StyledBtn } from '../style/StyledBtn.style';

const Home = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(true);  
  const [page, setPage] = useState<number>(1)
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`
  useEffect(() => {
    const getApiInfo = async () => {
      const result = await fetch(apiUrl);
      const data = await result.json();      
      setCharacters(data.results);
      setLoading(false);  
    }
    getApiInfo();

  }, [apiUrl])

  const handleNext = () => {    
    setPage(page + 1);
  }

  const handlePrevious = () => {
    setPage(page - 1);
  }
  
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
      <div>
        <StyledBtn disabled={ page === 1} onClick={ handlePrevious }>Previous</StyledBtn>
        <StyledBtn disabled={ page < 42 ? false: true } onClick={ handleNext }>Next</StyledBtn>
      </div>
    </main>
  )
}

export default Home;