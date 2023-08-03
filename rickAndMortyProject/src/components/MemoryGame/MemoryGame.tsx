import GameCard from './GameCard';
import { useState, useEffect } from 'react';

const MemoryGame = () => {    
  const [randomCharacters, setRandomCharacters] = useState<string[]>([]);
  const [charactersImage, setCharactersImage] = useState<string[]>([]);
  const mirrorImages = charactersImage.slice();
  const finalCharsArray = charactersImage.concat(mirrorImages);
  
  const generateRandomID = () => {   
    const randomId = Math.floor((Math.random() * 826) + 1);
    return randomId;
  }

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
        // console.log(data.image);
        return data.image;
      })
      const images = await Promise.all(fetchPromises);
      setCharactersImage(images);
      
    }
    getImage();
  }, [randomCharacters])
  
  const shuffleArray = (array: string[]) => {
    const shuffle = () => Math.random() - 0.5;
    array.sort(shuffle);
    return array;
  }

  const shuffledChars = shuffleArray(finalCharsArray);
  
  return(
    <main className='gameMain'>
      <div className='gameGrid'>
        {shuffledChars.map((imageURL) => <GameCard imageURL={ imageURL } />)}        
      </div>
    </main>
  )
}

export default MemoryGame;