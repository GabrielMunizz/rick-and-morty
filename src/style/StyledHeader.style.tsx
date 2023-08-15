import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  min-height: 60px;
  margin-top: 30px;

  & #headerTitle {
    font-family: 'getSchwifty', sans-serif;
    font-size: 50px;
    text-align: center;
    color: #11AFC8; 
    -webkit-text-stroke: 2px #84BB3E;    
  }

  & #headerMenu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #11AFC8;    
    font-family: 'Dangrek', cursive;
    width: 100%;
  }

  & #headerMenu input {
    font-size: 20px;
    border: none;
  }

  & #headerMenu button {
    height: 25px;
  }
`