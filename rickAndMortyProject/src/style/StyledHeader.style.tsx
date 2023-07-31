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
    font-size: 40px;
    text-align: center;    
  }

  & #headerMenu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  & #headerMenu input {
    font-size: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  & #headerMenu button {
    height: 25px;
  }
`