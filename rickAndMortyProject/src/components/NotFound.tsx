import { StyledBtn } from '../style/StyledBtn.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from './Loading';

const NotFound = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate('/home');
      setLoading(false);
    }, 1500)   
    
  }
  return(
    <main>
      {loading && <Loading />}
      {!loading && (
        <section id='notFound'>
          <img src="/src/images/notFound.png" alt="Página não encontrada" />
          <StyledBtn onClick={ handleClick }>Home</StyledBtn>
        </section>  
      )}
    </main>
  )
}

export default NotFound;