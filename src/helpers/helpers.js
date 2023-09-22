export const generateRandomId = () => {
  return self.crypto.randomUUID();
};

export const setFirstLetterToUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
};

export const isPastDate = (date) => {
  return date < new Date();
};

export const generateRandomAvatar = (style = 'miniavs') => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${randomSeed}`;
};