import { StyledBtn } from '../../../style/StyledBtn.style';
import { useNavigate } from 'react-router-dom';
import './Modal.css'
import congratsImage from '../../../../public/images/congratsBG.jpg'

const Modal = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/home');
  }
  return(
    <section id='modalPage'>
      <div id='modalContainer'>
        <h1>Congratulations!</h1>
        <p>You've completed the game!</p>
        <img src={congratsImage} alt="congratulations image" />
        <StyledBtn onClick={ handleClick }>Back to home</StyledBtn>
      </div>
    </section>
  )
}

export default Modal;