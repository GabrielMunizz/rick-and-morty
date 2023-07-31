import { getUser } from '../userAPI';
import { useState } from 'react';
import { StyledBtn } from '../style/StyledBtn.style';

const Header = () => {
  return(
    <header>
      <h1 id='headerTitle'>Rick and Mortypedia</h1>
      <section id='headerMenu'>
        <div>
          <h2>User</h2>
        </div>
        <div>
          <h2>Link to home</h2>
        </div>
        <div>
          <h2>Link to Game</h2>
        </div>
        <div>
          <input type="text" name='search' />
          <StyledBtn>Search</StyledBtn>
        </div>
        <div>
          <h2>Log off</h2>
        </div>      
      </section>
    </header>

  )
}

export default Header;