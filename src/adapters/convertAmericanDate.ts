export const convertAmericanDate = ( date: string ): string => {
  return date.split("/").reverse().join("-");
};

const date: Date = new Date();
const  day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();

export const currentDate = year + "-" + month + "-" + day;

