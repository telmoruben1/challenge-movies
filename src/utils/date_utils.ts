import moment from "moment";

//receives a date and checks if the year is the current one. If it is, it indicates the time difference from the current date.
export const getMessageDate = (date: Date): string => {
  if (moment().year() === moment(date).year()) {
    return moment(date).fromNow();
  }
  return moment(date).format("YYYY-MM-DD");
};

//Generates a list of years years
export const generateArrayOfYears = (): Array<number> => {
  let max = new Date().getFullYear();
  let min = max - 100;
  let years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

//It returns only the year of the date it received
export const getYearFromDate = (date: Date): number => {
  return moment(date).year();
};
