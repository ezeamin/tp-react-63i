export const generateRandomId = () => {
  return self.crypto.randomUUID();
};

export const setFirstLetterToUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
