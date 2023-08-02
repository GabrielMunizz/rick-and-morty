import CharactersCard from './CharactersCard';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import { CharacterType } from '../types';
import { StyledBtn } from '../style/StyledBtn.style';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [charactersResult, setCharactersResult] = useState<CharacterType[]>([]);
  const [resultCount, setResultCount] = useState<number>(0)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();
  const { name } = useParams();  
  const searchURL = `https://rickandmortyapi.com/api/character/?page=${ page }&name=${ name as string }`

  useEffect(() => {    
    const findCharacters = async () => {
      setLoading(true);
      const result = await fetch(searchURL)
      const data = await result.json();
      if (data.results === undefined) {
        navigate('*')
      }   
      setResultCount(data.info.count);
      setTotalPages(data.info.pages);
      setCharactersResult(data.results);
      setLoading(false); 
    }
    findCharacters();    
  }, [searchURL]);

  const handleNext = () => {    
    setPage(page + 1);
  }

  const handlePrevious = () => {
    setPage(page - 1);
  }
  
  return(
    <>
      {loading && <Loading />}
      {!loading && (
        <main className='mainHome'>
          <section className='searchResult'>
            <h3>{`Found ${ resultCount } characters!`}</h3>            
            <div className='cardContainer'>
              {charactersResult.map((character) => <CharactersCard character={character} />)}
            </div>
            <h3>{`Page: ${ page } of ${ totalPages }`}</h3>
            <div>
              <StyledBtn disabled={ page === 1 } onClick={ handlePrevious }>Previous</StyledBtn>
              <StyledBtn disabled={ page === totalPages } onClick={ handleNext }>Next</StyledBtn>
            </div>
          </section>
        </main>
      )}
    </>
  )
}

export default Search;