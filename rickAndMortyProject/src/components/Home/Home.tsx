import { useState, useEffect } from 'react';
import { CharacterType } from '../../types';
import CharactersCard from '../CharactersCard/CharactersCard';
import Loading from '../Loading/Loading';
import { StyledBtn } from '../../style/StyledBtn.style';
import './Home.css'

const Home = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(false);  
  const [page, setPage] = useState<number>(1)
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`
  
  useEffect(() => {
    const getApiInfo = async () => {
      setLoading(true);
      const result = await fetch(apiUrl);
      const data = await result.json(); 
      console.log(data);     
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
    <main className='mainHome'>
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
      <div id='homeBtnContainer'>
        <StyledBtn disabled={ page === 1} onClick={ handlePrevious }>Previous</StyledBtn>
        <h3>{`Page: ${ page }`}</h3>
        <StyledBtn disabled={ page === 42 } onClick={ handleNext }>Next</StyledBtn>
      </div>
    </main>
  )
}

export default Home;