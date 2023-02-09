export const getPixelValue = (length?: number): string => {
  return getUnitValue('px', length);
};

export const getEmValue = (length?: number): string => {
  return getUnitValue('em', length);
};

const getUnitValue = (unit: string, length?: number): string => {
  return (length && `${length}${unit}`) || 'none';
};
