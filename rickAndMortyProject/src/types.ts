export type CharacterType = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  episode: [string]
}

export type CardType = {
  id: number,
  image: string,  
}

export type UserType = {
  name: string;  
};

export const shuffleArray = (array: string[]) => {
  const shuffle = () => Math.random() - 0.5;
  array.sort(shuffle);
  return array;
}

export const generateRandomID = () => {   
  const randomId = Math.floor((Math.random() * 826) + 1);
  return randomId;
}