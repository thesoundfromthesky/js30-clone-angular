export function getRandomInt(max: number, min: number = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export const degToRad: Function = (deg: number): number => {
  const rad: number = (deg * Math.PI) / 180;
  return rad;
};

const mL: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const mS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export const convertDate: Function = (date: Date, long:boolean=false): string => {
  const month:string[] = long? mL: mS;
  const convertedDate: string = `${
    month[date.getMonth()]
  }, ${date.getDate()}, ${date.getFullYear()}`;
  return convertedDate;
};
