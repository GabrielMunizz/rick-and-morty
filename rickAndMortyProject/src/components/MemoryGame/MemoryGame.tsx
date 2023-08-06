import GameCard from './GameCard';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { CardType, initialCard, shuffleArray, generateRandomID } from '../../types';

const MemoryGame = () => {    
  const [randomCharacters, setRandomCharacters] = useState<string[]>([]);
  const [charactersImage, setCharactersImage] = useState<string[]>([]); 
  const imagesArray = charactersImage.concat(charactersImage);
  
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
  
  
  const shuffledImages = shuffleArray(imagesArray);

 const [selectedCard, setSelectedCard] = useState<CardType>(initialCard)
 const [firstSelectedCard, setFirstSelectedCard] = useState<CardType>(initialCard); 
 const [secondSelectedCard, setSecondSelectedCard] = useState<CardType>(initialCard);

 const handleClick = (id: number, url: string) => {
    if (selectedCard.image === ''){
      setSelectedCard({id: id, image: url, selected: 'revealFront'});
      setFirstSelectedCard(selectedCard);                 
    } else if (secondSelectedCard.image === '') {
      setSecondSelectedCard({id: id, image: url, selected: 'revealFront'});
    }
    
 }
 
  return(
    <main id='gameMain'>
      <div id='gameTitle'>
      <h1>Memory game</h1>
      </div>
      <div id='gameGrid'>
        {shuffledImages.map((imageURL, index) => <GameCard  
                                            key={uuid()} 
                                            id={index}                                           
                                            imageURL={ imageURL } 
                                            selectedCard={ selectedCard }
                                            firstSelectedCard={ firstSelectedCard } 
                                            secondSelectedCard={ secondSelectedCard }                                        
                                            handleClick={ handleClick } />)}
      </div>
    </main>
  )
}

export default MemoryGame;