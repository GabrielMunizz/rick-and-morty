import { StyledBtn } from '../../style/StyledBtn.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../Loading/Loading';
import './NotFound.css'
import notFoundImage from '../../../public/images/notFound.png'

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
          <img src={notFoundImage} alt="Not found image" />
          <StyledBtn onClick={ handleClick }>Home</StyledBtn>
        </section>  
      )}
    </main>
  )
}

export default NotFound;