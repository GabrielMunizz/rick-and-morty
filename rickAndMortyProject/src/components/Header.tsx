import { getUser } from '../userAPI';
import { useState, useEffect } from 'react';
import { StyledBtn } from '../style/StyledBtn.style';
import { Link } from 'react-router-dom';
import { UserType } from '../types';
import { StyledHeader } from '../style/StyledHeader.style';

const Header = () => {
  const [user, setUser] = useState<UserType>({name: ''});

  useEffect(() => {
    const userData = async () => {
      const data = await getUser();
      setUser(data);
    }
    userData();
  },[])

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
        <div>
          <input type="text" name='search' placeholder=" Type a character's name"/>
          <StyledBtn>Search</StyledBtn>
        </div>      
      </section>
    </StyledHeader>
  )
}

export default Header;