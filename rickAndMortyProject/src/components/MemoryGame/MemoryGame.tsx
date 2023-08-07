import GameCard from './GameCard';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { CardType } from '../../types';
import { generateRandomID, shuffleArray } from '../../utils';

const MemoryGame = () => {    
  const [randomCharacters, setRandomCharacters] = useState<string[]>([]);
  const [charactersImage, setCharactersImage] = useState<string[]>([]);  
  const [selectedCard, setSelectedCard] = useState<CardType[]>([]);  
  const [revealFront, setRevealFront] = useState<string>('');
  const [match, setMatch] = useState<number>(0);
  
  useEffect(() => {    
      const randomURLs = [];

      while(randomURLs.length < 10) {
        const randomID = generateRandomID();
        const charURL = `https://rickandmortyapi.com/api/character/${ randomID }`
        randomURLs.push(charURL);        
      }
      
    setRandomCharacters([...randomURLs]);    
  }, [])

  useEffect(() => {    
    const getImage = async () => {
      const fetchPromises = randomCharacters.map( async (character) => {
        const result = await fetch(character);
        const data = await result.json();        
        return data.image;
      })
      const images = await Promise.all(fetchPromises);
      const mirrorImages = images.concat(images);
      setCharactersImage(shuffleArray(mirrorImages));
    }
    getImage();
  }, [randomCharacters])

 const handleClick = (id: number, url: string) => {
    if (selectedCard.length < 2){
      setSelectedCard([...selectedCard, { id: id, image: url }]);
      if (revealFront === '') {
        setRevealFront('revealFront');        
      }      
    }    
  }
  
  console.log('selecionada =',selectedCard); 
  return(
    <main id='gameMain'>
      <div id='gameTitle'>
      <h1>Memory game</h1>
      </div>
      <h2>{`Match: ${ match }`}</h2>
      <div id='gameGrid'>
        {charactersImage.map((imageURL, index) => <GameCard  
                                                    key={uuid()} 
                                                    id={index}                                           
                                                    imageURL={ imageURL }
                                                    revealFront={revealFront}
                                                    selectedCard={selectedCard}                                          
                                                    handleClick={ handleClick } 
                                                    />)}
      </div>
    </main>
  )
}

export default MemoryGame;