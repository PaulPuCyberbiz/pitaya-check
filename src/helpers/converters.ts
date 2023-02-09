export enum Unit {
  B = 0,
  KB = 1,
  MB = 2,
  GB = 3,
  TB = 4,
}

export const convertToBytes = (value: number, unit: Unit) => {
  return value * Math.pow(1024, unit);
};

export const convertBytesTo = (value: number, unit: Unit) => {
  return value * Math.pow(1024, -unit);
};
