import { getUser } from '../userAPI';
import React, { useState, useEffect } from 'react';
import { StyledBtn } from '../style/StyledBtn.style';
import { Link } from 'react-router-dom';
import { UserType } from '../types';
import { StyledHeader } from '../style/StyledHeader.style';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState<UserType>({name: ''});
  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate();

  useEffect(() => {
    const userData = async () => {
      const data = await getUser();
      setUser(data);
    }
    userData();
  },[])

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  }

  const handleSubmit = () => {
    navigate(`/home/search/${ search }`);    
  }

  return(
    <StyledHeader>
      <h1 id='headerTitle'>Rick and Mortypedia</h1>
      <section id='headerMenu'>
        <div>
          <h2>{`User: ${ user.name }`}</h2>
        </div>
        <div>
          <Link to='/home'><h2>Home</h2></Link>
        </div>
        <div>
          <h2>Link to Game</h2>
        </div>        
        <div>
          <Link to='/'><h2>Log off</h2></Link>
        </div>
        <form onSubmit={ handleSubmit }>
          <input type="text" 
                 name='search' 
                 placeholder=" Type a character's name" 
                 onChange={ handleChange } />
          <StyledBtn>Search</StyledBtn>
        </form>      
      </section>
    </StyledHeader>
  )
}

export default Header;