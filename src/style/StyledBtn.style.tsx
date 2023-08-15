import styled from 'styled-components'

export const StyledBtn = styled.button`
  background-color: #9DC93C;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px #000;
  color: #fff;
  font-size: 18px;
  width: 90px;
  height: 45px;
  margin: 20px;
  transition: 0.3s ease;
  &:hover {
    background-color: #338843;
    transform: scale(1.1);
    cursor: pointer;
  }
  &:disabled {
    background-color: #808080;
    transform:none;
  }
`