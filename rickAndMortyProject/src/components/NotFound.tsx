import { StyledBtn } from '../style/StyledBtn.style';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <main>
      <section id='notFound'>
        <img src="/src/images/notFound.png" alt="Página não encontrada" />
        <Link to='/home'><StyledBtn>Home</StyledBtn></Link>
      </section>
    </main>
  )
}

export default NotFound;