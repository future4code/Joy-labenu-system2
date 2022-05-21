export const checkSpace = ( value: string ): boolean => {
  return /\s/g.test(value);
};

export const validateEmail = ( emailAdress: string ): boolean => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAdress);
};