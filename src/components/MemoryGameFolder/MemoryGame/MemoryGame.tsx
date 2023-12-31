import GameCard from '../GameCard/GameCard';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { CardType } from '../../../types';
import { generateRandomID, shuffleArray } from '../../../utils';
import Loading from '../../Loading/Loading';
import Modal from '../Modal/Modal';
import './MemoryGame.css'


const MemoryGame = () => {
  const [loading, setLoading] = useState(true); 
  const [randomCharacters, setRandomCharacters] = useState<string[]>([]);
  const [charactersImage, setCharactersImage] = useState<string[]>([]);  
  const [selectedCard, setSelectedCard] = useState<CardType[]>([]);  
  const [matchedCards, setMatchedCards] = useState<CardType[]>([]);
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
      setLoading(false);
    }
    getImage();
  }, [randomCharacters])

 const checkRevealed = () => {
    if (selectedCard[0].image === selectedCard[1].image) {
      if (selectedCard[0].id !== selectedCard[1].id) {
        setMatchedCards([...matchedCards, ...selectedCard])
        setMatch(match + 1); 
      }
    }
      setSelectedCard([]);    
 }
  
 const handleClick = (id: number, url: string) => {
    if (selectedCard.length < 2){
      setSelectedCard([...selectedCard, { id: id, image: url }]);
      if (revealFront === '') {
        setRevealFront('revealFront');  
      }    
    }    
  }  

  // useEffect just to check if cards match
  useEffect(() => {
    if (selectedCard.length === 2) {
      setTimeout(() => {
        checkRevealed();
      }, 750)      
    }
  });
  
  return(
    <>
    {loading && <Loading />}
    {match === 10 && <Modal />} 
    {!loading && (
      <main className={`gameMain ${match === 10 && 'blur'}`}>
        <div id='gameTitle'>
        <h1>Memory game</h1>
        </div>
        <h2>Match: <span>{ match }</span></h2>        
        <div id='gameGrid'>
          {charactersImage.map((imageURL, index) => <GameCard  
                                                      key={uuid()} 
                                                      id={index}                                           
                                                      imageURL={ imageURL }
                                                      revealFront={revealFront}
                                                      selectedCard={selectedCard}
                                                      matchedCards={matchedCards}                                         
                                                      handleClick={ handleClick } 
                                                      />)}
        </div>
      </main>
    )}      
    </>
  )
}

export default MemoryGame;