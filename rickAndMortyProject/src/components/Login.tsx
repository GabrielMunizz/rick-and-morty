import { StyledBtn } from '../style/StyledBtn.style';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
const Login = () => {
  return(
    <>
    <header>
      <h1>Welcome to Rick and Mortypedia</h1>
    </header>
    <main>     
      <section id='loginContainer'>
        <img src="/src/images/loginPageImage.jpg" alt="" />
        <form>
          <div>
          <h2>Login:</h2>
          <input type="text" />
          <h2>E-mail:</h2>
          <input type="email" name="email" id="" />
          </div>
          <StyledBtn>Login</StyledBtn>
        </form>        
      </section>
    </main>
    <footer>
      <section id='devInfo'>
        <div>
          <p>Dev: Gabriel Muniz</p>
        </div>
        <div id='iconsContainer'>
          <a id='linkedin' href="https://www.linkedin.com/in/gabriel-muniz-dev/" target='_blank'><AiOutlineLinkedin /></a>
          <a id='github' href="https://github.com/GabrielMunizz" target='_blank'><AiFillGithub /></a>
        </div>
        </section>
    </footer>
    </>
  )
}

export default Login;