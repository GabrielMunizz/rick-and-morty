import { StyledBtn } from '../../../style/StyledBtn.style';
import { useNavigate } from 'react-router-dom';
import './Modal.css'

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
        <img src="/src/images/congratsBG.jpg" alt="" />
        <StyledBtn onClick={ handleClick }>Back to home</StyledBtn>
      </div>
    </section>
  )
}

export default Modal;