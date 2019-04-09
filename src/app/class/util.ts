export function getRandomInt(max: number, min: number = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export const degToRad: Function = (deg: number): number => {
  const rad: number = (deg * Math.PI) / 180;
  return rad;
};
