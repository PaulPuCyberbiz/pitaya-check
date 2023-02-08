export const sizeClassNameMap = {
  large: 'pitaya-lg',
  medium: 'pitaya-md',
  small: 'pitaya-sm',
};

export type Size = keyof typeof sizeClassNameMap;

export const sizeClassName = (size?: Size) =>
  (size && sizeClassNameMap[size]) || 'pitaya-lg';

const stateClassNameMap: { [key: string]: string } = {
  'primary': 'pitaya-btn-primary',
  'secondary': 'pitaya-btn-secondary',
  'secondary-icon': 'pitaya-btn-secondary-icon',
  'cancel': 'pitaya-btn-cancel',
};

export type State = keyof typeof stateClassNameMap;

export const stateClassName = (state?: State) =>
  (state && stateClassNameMap[state]) || 'pitaya-btn-primary';
