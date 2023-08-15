export const shuffleArray = (array: string[]) => {
  const shuffle = () => Math.random() - 0.5;
  array.sort(shuffle);
  return array;
}

export const generateRandomID = () => {   
  const randomId = Math.floor((Math.random() * 826) + 1);
  return randomId;
}