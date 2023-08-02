import { StyledBtn } from '../style/StyledBtn.style';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../userAPI';
import Loading from './Loading';

const Login = () => {
  const [user, setUser] = useState<string>('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setUser(target.value);
  }
  const handleSubmit = async () => {
    setLoading(true);
    await createUser({name: user});
    setLoading(false);
    navigate('/home')
  }
  return(
    <>
    {loading && (
      <Loading />
    )}

    {!loading && (
      <>
    <header id='loginHeader'>
      <h1>Welcome to Rick and Mortypedia</h1>
    </header>
    <main>     
      <section id='loginContainer'>
        <img src="/src/images/loginPageImage.jpg" alt="" />
        <form onSubmit={ handleSubmit }>
          <div>
          <h2>Login:</h2>
          <input name='login' type="text" onChange={ handleChange }/>
          </div>
          <StyledBtn disabled={ user.length < 3 }>Login</StyledBtn>
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
    )}
    </>
  )
}

export default Login;